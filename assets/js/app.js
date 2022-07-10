let GlobalObject = {
    showHolidayMessage: false,
    holidayMessage: "Our office will be closed from 5.00pm (ACST) Friday, 11 June 2021 for the Queen's Birthday public holiday, and will re-open at 9.00am on Tuesday, 15 June 2021. We wish everyone a happy and safe long weekend!"
};

/* Mobile Devices Navigation Select Script */
$(document).ready(function () {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    if (is_ie == true) // If Internet Explorer
    {
        jQuery('#OldBrowserMessage').show();
    }
    else {
        if (GlobalObject.showHolidayMessage == true) {
            jQuery('#holidayMessageContainer').text(GlobalObject.holidayMessage);
            jQuery('#holidayMessageContainer').show();
        }

        if (navigator.userAgent.indexOf('Windows') > 0) {
            $('body').addClass('notmacos');
        } else if (navigator.userAgent.indexOf('Mac') > 0) {
            $('body').addClass('macos');
        }

        $('.hamburger_menu').click(function () {
            let target = $('#top-nav-menu');
            if (target.hasClass('openedHamburger'))
                target.removeClass('openedHamburger')
            else
                target.addClass('openedHamburger')
        });

        //NOTE: to create ripple animation for the buttons - remember the escape the characters
        let tempScript = "[].map.call(document.querySelectorAll('[anim=\"ripple\"]'), el => { el.addEventListener('click', e => { e = e.touches ? e.touches[0] : e; const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2; el.style.cssText = `--s: 0; --o: 1;`; el.offsetTop; el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};` }) })";
        eval(tempScript);

        // [].map.call(document.querySelectorAll('[anim="ripple"]'), el => {
        //     el.addEventListener('click', e => {
        //         e = e.touches ? e.touches[0] : e;
        //         const r = el.getBoundingClientRect(), d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
        //         el.style.cssText = `--s: 0; --o: 1;`; el.offsetTop;
        //         el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
        //     })
        // })

        //NOTE: to create smooth scrolling
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });

        //NOTE: to create fade in animation when scrolling
        $(window).scroll(function () {
            $('.hideme:not(.featuresDetailsGroup)').each(function (i) {
                var middle_of_object = $(this).offset().top + $(this).outerHeight() / 4;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > middle_of_object) {
                    $(this).addClass('showme');
                    $(this).removeClass('hideme');
                }
            });           
        }).scroll();

        $('#enquiryTypeDropdown').change(function () {
            let selectedValue = $(this).val();

            if (selectedValue == 'Sales') {
                $('#howDidDropdown').show();
            }
            else {
                $('#howDidDropdown').hide();
                $('#howDidDropdown').val('');
            }
        });
    }
});

function increaseDescriptionHeight(heightestID, lowestID, textAreaID) {
    let contactHelpdeskSectionHeight = $('#' + heightestID).height();

    if ($('#' + textAreaID).length > 0) {
        let openSupportCaseSectionHeight = $('#' + lowestID).height();
        let contactMeDescriptionHeight = $('#' + textAreaID).height();
        let diff = contactHelpdeskSectionHeight - openSupportCaseSectionHeight;
        $('#' + textAreaID).height(contactMeDescriptionHeight + diff);
    }

    if ($('#liveChatSample').length > 0) {
        let callUsSectionLastHeight = $('.callUsSectionLast').height();
        let liveChatSampleHeight = $('#liveChatSample').height();
        let diff2 = contactHelpdeskSectionHeight - callUsSectionLastHeight;

        $('#liveChatSample').height(liveChatSampleHeight + diff2);

        let numberOfSetences = 6;
        let eachPadding = diff2 / numberOfSetences;
        $('.agentMessageContainer, .userMessageContainer').css('margin-bottom', eachPadding);
    }
}

function featuresLinkClickEvent(event) {
    window.location.href = "./Features.html";
}

function featuresDetailsClickEvent(event) {
    $("#btnFeaturesDetails").css('visibility', 'hidden');

    $(".appointmentBookDetailsSection").slideDown( "slow");

    $(window).scroll(function () {
        $('.appointmentBookDetailsSection .featuresDetailsGroup.hideme').each(function (i) {
            var middle_of_object = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > middle_of_object) {
                $(this).addClass('showme');
                $(this).removeClass('hideme');
            }              
        });
    }).scroll();
}

function clinicalNotesDetailsClickEvent(event){
    $("#btnClinicalNotesDetails").css('visibility', 'hidden');

    $(".clinicalNotesDetailsSection").slideDown( "slow");

    $(window).scroll(function () {
        $('.clinicalNotesDetailsSection .featuresDetailsGroup.hideme').each(function (i) {
            var middle_of_object = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > middle_of_object) {
                $(this).addClass('showme');
                $(this).removeClass('hideme');
            }              
        });
    }).scroll();
}

function billingDetailsClickEvent(event) {
    $("#btnBillingDetails").css('visibility', 'hidden');

    $(".billingDetailsSection").slideDown( "slow");

    $(window).scroll(function () {
        $('.billingDetailsSection .featuresDetailsGroup.hideme').each(function (i) {
            var middle_of_object = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > middle_of_object) {
                $(this).addClass('showme');
                $(this).removeClass('hideme');
            }              
        });
    }).scroll();
}

function communicationDetailsClickEvent (event){
    $("#btnCommunicationDetails").css('visibility', 'hidden');

    $(".communicationDetailsSection").slideDown( "slow");

    $(window).scroll(function () {
        $('.communicationDetailsSection .featuresDetailsGroup.hideme').each(function (i) {
            var middle_of_object = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > middle_of_object) {
                $(this).addClass('showme');
                $(this).removeClass('hideme');
            }              
        });
    }).scroll();
}

function helpMeLinkClickEvent(event) {
    window.location.href = "./Support.html";
}

function contactMeLinkClickEvent(event) {
    var bookDemoSection = document.getElementById('bookDemoSection');
    document.documentElement.scroll(0, bookDemoSection.offsetTop);
}

function goToKnowledgeBaseLinkClickEvent(event) {
    window.location.href = "https://help.pracsuite.com/en/";
}

function validateEmailAddressField(event, element) {
    event.preventDefault();

    validateContactMeFields();

    var emailAddressField = element;

    emailAddressField.setCustomValidity("");

    var emailAddressStr = emailAddressField.value;
    var pattern = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{1,15}|[0-9]{1,3})(\\]?)$");
    var result = pattern.test(emailAddressStr);

    if (result) {
        emailAddressField.classList.remove('invalid');
    }
    else {
        emailAddressField.classList.add('invalid');
    }
}

function submitToAPIContactMe(event, element, from) {
    // event.preventDefault();
    // var nameField = document.getElementsByClassName('contactMeName')[0];
    // var businessField = document.getElementsByClassName('contactMeBusiness')[0];
    // var phoneField = document.getElementsByClassName('contactMePhone')[0];
    // var emailAddressField = document.getElementsByClassName('contactMeEmail')[0];

    // var submitButton = document.getElementsByClassName('ContactMeButton')[0];

    // var hasDescription = document.getElementsByClassName('contactMeDescription').length > 0;
    // var descriptionField = document.getElementsByClassName('contactMeDescription')[0];

    // if (nameField.reportValidity() && businessField.reportValidity() && phoneField.reportValidity() && emailAddressField.reportValidity()) {
    //     if ((hasDescription == true && descriptionField.reportValidity()) || hasDescription == false) {
    //         emailAddressField.classList.remove('invalid');
    //         emailAddressField.setCustomValidity("");

    //         var emailAddressStr = emailAddressField.value;
    //         var pattern = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{1,15}|[0-9]{1,3})(\\]?)$");
    //         var result = pattern.test(emailAddressStr);

    //         let desc = '';
    //         let preferredReponseMethod = '';
    //         let priority = '';
    //         let subject = '';
    //         let enquiryType = '';
    //         let howDidYouFindUs = '';

    //         if (hasDescription) {
    //             desc = descriptionField.value;
    //         }

    //         if (document.getElementsByClassName('responseMethodDropdown').length > 0) {
    //             preferredReponseMethod = document.getElementsByClassName('responseMethodDropdown')[0].value;
    //         }

    //         if (document.getElementsByClassName('priorityDropdown').length > 0) {
    //             priority = document.getElementsByClassName('priorityDropdown')[0].value;
    //         }

    //         if (document.getElementsByClassName('contactMeSubject').length > 0) {
    //             subject = document.getElementsByClassName('contactMeSubject')[0].value;
    //         }

    //         if (document.getElementsByClassName('enquiryTypeDropdown').length > 0) {
    //             enquiryType = document.getElementsByClassName('enquiryTypeDropdown')[0].value;
    //         }

    //         if (document.getElementsByClassName('howDidDropdown').length > 0) {
    //             howDidYouFindUs = document.getElementsByClassName('howDidDropdown')[0].value;
    //         }

    //         if (result) {
    //             var data = {
    //                 name: nameField.value,
    //                 business: businessField.value,
    //                 phone: phoneField.value,
    //                 email: emailAddressStr,
    //                 preferredReponseMethod: preferredReponseMethod,
    //                 priority: priority,
    //                 subject: subject,
    //                 enquiryType: enquiryType,
    //                 desc: desc,
    //                 from: from,
    //                 howDidYouFindUs: howDidYouFindUs
    //             };

    //             $.ajax({
    //                 url: "https://mkp8duh1ug.execute-api.ap-southeast-2.amazonaws.com/dev/send-mail",
    //                 type: "POST",
    //                 dataType: "json",
    //                 crossDomain: "true",
    //                 contentType: "application/json; charset=utf-8",
    //                 data: JSON.stringify(data),
    //                 success: function () {
    //                 },
    //                 error: function () {
    //                 }
    //             });

    //             var contactSubmittedTextField = document.getElementsByClassName('contactMeSubmittedText')[0];
    //             contactSubmittedTextField.hidden = undefined;

    //             nameField.value = "";
    //             businessField.value = "";
    //             phoneField.value = "";
    //             emailAddressField.value = "";

    //             if (hasDescription == true) {
    //                 descriptionField.value = "";
    //             }

    //             if (document.getElementsByClassName('responseMethodDropdown').length > 0) {
    //                 document.getElementsByClassName('responseMethodDropdown')[0].value = "";
    //             }

    //             if (document.getElementsByClassName('priorityDropdown').length > 0) {
    //                 document.getElementsByClassName('priorityDropdown')[0].value = "";
    //             }

    //             if (document.getElementsByClassName('contactMeSubject').length > 0) {
    //                 document.getElementsByClassName('contactMeSubject')[0].value = "";
    //             }

    //             validateContactMeFields();
    //         }
    //         else {
    //             emailAddressField.classList.add('invalid');
    //             emailAddressField.setCustomValidity("Please enter a valid email address");
    //             emailAddressField.reportValidity();
    //         }
    //     }
    //     else {
    //         return;
    //     }
    // }
    // else {
    //     return;
    // }
}

function validateContactMeFields() {
    var nameField = document.getElementsByClassName('contactMeName')[0];
    var businessField = document.getElementsByClassName('contactMeBusiness')[0];
    var phoneField = document.getElementsByClassName('contactMePhone')[0];
    var emailAddressField = document.getElementsByClassName('contactMeEmail')[0];
    var submitButton = document.getElementsByClassName('ContactMeButton')[0];
    var invalidSubmitButton = document.getElementsByClassName('ContactMeButtonInvalid')[0];

    var emailAddressStr = emailAddressField.value;
    var pattern = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{1,15}|[0-9]{1,3})(\\]?)$");
    var result = pattern.test(emailAddressStr);

    var hasDescription = document.getElementsByClassName('contactMeDescription').length > 0;
    var descriptionField = document.getElementsByClassName('contactMeDescription')[0];

    // Required fields
    if (nameField.value.length > 0 && businessField.value.length > 0 && phoneField.value.length > 0 && result && (hasDescription == false || (hasDescription == true && descriptionField.value.length > 0))) {
        submitButton.classList.remove('hiddenButton');
        invalidSubmitButton.classList.add('hiddenButton');
    }
    else {
        submitButton.classList.add('hiddenButton');
        invalidSubmitButton.classList.remove('hiddenButton');
    }
}

function updateOfficeStatus(heightestID, lowestID, textAreaID) {
    // jQuery.ajax({
    //     type: "GET",
    //     url: "https://smartsoft.com.au/Support/OfficeHours.asmx/GetOfficeStatus",
    //     success: function (data) {
    //         jQuery('#lblCurrentDateTime').html(jQuery(data).find('CurrentTime').text());

    //         jQuery(data).find('OpenStatus').text();
    //         let openStatus = jQuery(data).find('OpenStatus').text();
    //         jQuery('#lblHelpdeskOpen').text((openStatus == 'open' ? 'OPEN' : 'CLOSED'));

    //         increaseDescriptionHeight(heightestID, lowestID, textAreaID);
    //     }
    // });

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    jQuery('#lblCurrentDateTime').html(date);
    increaseDescriptionHeight(heightestID, lowestID, textAreaID);
}
