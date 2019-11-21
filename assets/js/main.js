var Test = function() {
    var is_rtl = false;
    var auto_played = false;

    var language_flag = function () {
        is_rtl = $("body").hasClass("rtl");
    };

    var animate_reveal = function() {
        var config = {
            viewFactor : 0.15,
            duration   : 2000,
            distance   : "0px",
            scale      : 0.8,
            easing     : 'ease',
            mobile     : true
        };

        window.sr = ScrollReveal(config);

        sr.reveal('.animate-container');
    };

    var form_validation = function () {
        $("#newsletter-subscription-form").validate({
            rules: {
                "email-address": {
                    "required": true,
                    "email": true
                }
            },
            errorPlacement: function(error, element) {

            },
            submitHandler: function(form) {

                var submit_btn = $(form).find("input[type=submit]");

                $.ajax(
                    {
                        method: $(form).attr("method"),
                        url: $(form).attr("action"),
                        data: $(form).serializeArray(),
                        beforeSend: function(e) {
                            if(is_rtl) {
                                submit_btn.val("يبعث...");
                            } else {
                                submit_btn.val("Sending...");
                            }

                            submit_btn.prop('disabled',true);
                        },
                        success: function(return_data)
                        {
                            var success_message = "";
                            if(is_rtl) {
                                success_message = create_success_message("شكراً للاشتراك بصحيفتنا!");
                            } else {
                                success_message = create_success_message("Thank you for subscribing to our newsletter!");
                            }

                            $(form).replaceWith(success_message);
                        },
                        error: function(xhr, textStatus, errorThrown)
                        {
                            return false;
                        }
                    });
            }
        });
    };

    function create_success_message($message) {
        return '<div class="alert alert-success">' + $message + '</div>';
    }

    return {
        //main function to initiate the module
        init: function() {

        }
    };

}();

jQuery(document).ready(function() {
    Test.init();
});
