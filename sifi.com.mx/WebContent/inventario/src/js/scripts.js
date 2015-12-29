// References
// #region

/// <reference path="/Common/Scripts/3rdParty/jquery.js" />
/// <reference path="/Common/Scripts/3rdParty/jquery-1.4.1-vsdoc.js" />
/// <reference path="/Common/Scripts/3rdParty/iepngfix.htc" />
/// <reference path="/Common/Scripts/3rdParty/iepngfix.js" />

// #endregion

// Global variables & functions
// #region
var c_j_RedirectPages = {
    feedback: "/TalkBack.aspx",
    chngpwd: "/PasswordReset.aspx",
    redir: "/Main.aspx?redir=redir",
    actvt : "/Activate.aspx"
};

var aLocalizations = {};

var s_RegisterTicket = '';

var b_IsFirstLoad = true;

var requiredFlashPlayerVersion = '9.0.124';

var b_PurchaseBackEvent = false;

var WebServices =
{
    'Purchase': '/Purchase/PurchaseWS.asmx/',
    'Common': '/Ajax/Backend.asmx/'
}

var PagesWhoRequireCSSFirst = {};
var PagesWhoRequireJSFirst = {};

var KeyCodes = {
    '-': '109,189',
    'Space': '32',
    '.': '190, 46',
    '+': '',
    'x': '',
    '(': '',
    ')': '',
    '[': '91',
    ']': '93',
    'Esc': '27',
    '_':'109, 189',
    'BackSpace':'8',
    'Delete':'46',
    'Enter':'13'
};

var SessionType =
{
    'IE6': 'IE6',
    'IE7': 'IE7',
    'IE8': 'IE8',
    'IE9': 'IE9',
    'Firefox': 'FF',
    'Opera': 'Opera',
    'Chrome': 'Chrome',
    'Safari': 'Safari'
};

var PaltformType =
{
    'MAC': 'MAC',
    'Windows': 'Windows'
};

var b_ScrollDragPreventer = false;

function UserLogout()
{
    JoinMe.Page.bIsUserLoggedIn = false;
    JoinMe.Page.fn_v_deleteCookie('encryptedauthcookie');
    JoinMe.Page.b_IsUserLoggedInByEncryptedCookie = false;
    JoinMe.Page.b_IsUserLoggedInByOneTimeTicket = false;
    window.location = '/Default.aspx';
}

// Obsoluted features
// #region
var c_j_ContentPages =
{
    c_s_Main: '/Main.aspx',
    c_s_MyJoinMe: '/MyJoinMe.aspx',
    c_s_Login: '/Login.aspx',
    c_s_TalkBack: '/TalkBack.aspx',
    c_s_ChangePassword: '/PasswordReset.aspx',
    c_s_Invitation: '/Invitation.aspx'
};

var c_j_BackendPages =
{
    c_s_Download: '/Download.aspx',
    c_s_FlashClient: '/Client/FlashClient.aspx',
    c_s_ClickOnce: '/clickonce/clickoncedeployer.application',
    c_s_Refresher: '/Refresher.aspx'
};

var c_j_ErrorPages =
{
    c_s_PageNotFound: '/ErrorPages/PageNotFound.aspx',
    c_s_UnknownError: '/ErrorPages/UnknownError.aspx'
};
// #endregion

// #endregion

// JoinMe namespace
// #region
/// <value name="JoinMe">Common</value>
var JoinMe = new function JoinMe()
{
    this.commonSingletonInstance = null;

    // Get the instance of the class
    // If there's none, instanciate one
    var getInstance = function ()
    {
        if (!this.commonSingletonInstance)
        {
            this.commonSingletonInstance = new createInstance();
        }
        return this.commonSingletonInstance;
    };

    // Create an instance of the Cats class
    var createInstance = function ()
    {
        /// <field name="Browser">Browser information</field>
        var $this = this;

        // Browser
        // #region
        this.Browser = new function ()
        {
            /// <summary>
            /// Browser information
            /// </summary>
            /// <field name="sUserAgent">Browsers user agent in lower case</field>
            /// <field name="bHasUserAgent">Flag indicating whether user agent exists</field>
            /// <field name="bHasDotNet2OrLater">Flag indicating whether user has .NET 2.0 or higher</field>
            /// <field name="bIsIE">Flag indicating whether users browser is IE</field>
            this.sUserAgent = navigator.userAgent ? navigator.userAgent.toLowerCase() : "";
            this.bHasUserAgent = this.sUserAgent != "";
            this.bHasDotNet2OrLater = this.bHasUserAgent ? this.sUserAgent.match(/\.net clr [2-3.]+|.net[4-9]/g) : false;
            //this.b_JavaInstalled = navigator.javaEnabled();
            this.b_JavaInstalled = false; // EXP-4789
            this.bIsIE = (this.sUserAgent.indexOf("msie") != -1);

            // SessionType
            // #region
            var sessionType = SessionType.Safari; // 99% of undetected browsers are safari based browsers
            if (this.sUserAgent.indexOf("msie 9") != -1)
                sessionType = SessionType.IE9;
            if (this.sUserAgent.indexOf("msie 8") != -1)
                sessionType = SessionType.IE8;
            else if (this.sUserAgent.indexOf("msie 7") != -1)
                sessionType = SessionType.IE7;
            else if (this.sUserAgent.indexOf("msie 6") != -1)
                sessionType = SessionType.IE6;
            else if (this.sUserAgent.indexOf("firefox/") != -1)
                sessionType = SessionType.Firefox;
            else if (this.sUserAgent.indexOf("opera/") != -1)
                sessionType = SessionType.Opera;
            else if (this.sUserAgent.indexOf("chrome/") != -1)
                sessionType = SessionType.Chrome;
            else if (this.sUserAgent.indexOf("safari/") != -1)
                sessionType = SessionType.Safari;
            this.eSessionType = sessionType;
            // #endregion

            // PlatformType
            // #region
            var platformType = PaltformType.Windows;
            if (this.sUserAgent.indexOf("mac os x") != -1)
                platformType = PaltformType.MAC;
            else
                platformType = PaltformType.Windows;
            this.ePlatformType = platformType;
            // #endregion

            // Mac 10.7, Lion is not supported by JavaDownloader
            if (this.b_JavaInstalled && this.ePlatformType == PaltformType.MAC && i_ServerSideMinorOS == 5)
                this.b_JavaInstalled = false;

            //Flash
            // #region
            this.FlashVersion = function ()
            {
                var flashVesrion = swfobject.getFlashPlayerVersion();
                return flashVesrion.major + '.' + flashVesrion.minor;
            };
            this.FullFlashVersion = function ()
            {
                var flashVesrion = swfobject.getFlashPlayerVersion();
                return flashVesrion.major + '.' + flashVesrion.minor + '.' + flashVesrion.release;
            };
            this.bHasRequiredFlashVersion = function () { return swfobject.hasFlashPlayerVersion(requiredFlashPlayerVersion) };
            // #endregion

            //TimeZone
            // #region
            this.oTimeZone = new function ()
            {
                // Set default values
                this.offset = 0;
                this.isDSTExists = false;
                this.DSTstartDate = (new Date(Date.UTC(2000, 1, 0, 0, 0, 0, 0))).toTimeString().split(' ')[0];
                this.DSTendDate = (new Date(Date.UTC(2000, 1, 0, 0, 0, 0, 0))).toTimeString().split(' ')[0];

                // http://www.michaelapproved.com/articles/daylight-saving-time-dst-detect/
                function TimezoneDetect()
                {
                    var dtDate = new Date('1/1/' + (new Date()).getUTCFullYear());
                    var intOffset = 10000; // set initial offset high so it is adjusted on the first attempt
                    var intMonth;
                    var intHoursUtc;
                    var intHours;
                    var intDaysMultiplyBy;

                    // go through each month to find the lowest offset to account for DST
                    for (intMonth = 0; intMonth < 12; intMonth++)
                    {
                        // go to the next month
                        dtDate.setUTCMonth(dtDate.getUTCMonth() + 1);

                        // To ignore daylight saving time look for the lowest offset.
                        // Since, during DST, the clock moves forward, it'll be a bigger number.
                        if (intOffset > (dtDate.getTimezoneOffset() * (-1)))
                        {
                            intOffset = (dtDate.getTimezoneOffset() * (-1));
                        }
                    }

                    return intOffset;
                }

                // http://www.michaelapproved.com/articles/timezone-detect-and-ignore-daylight-saving-time-dst/
                // Find start and end of DST
                function DstDetect()
                {
                    var dtDstDetect = new Date();
                    var dtDstStart = '';
                    var dtDstEnd = '';
                    var dtDstStartHold = ''; //Temp date hold
                    var intYearDayCount = 732; //366 (include leap year) * 2 (for two years)
                    var intHourOfYear = 1;
                    var intDayOfYear;
                    var intOffset = TimezoneDetect(); //Custom function. Make sure you include it.

                    //Start from a year ago to make sure we include any previously starting DST
                    dtDstDetect = new Date()
                    dtDstDetect.setUTCFullYear(dtDstDetect.getUTCFullYear() - 1);
                    dtDstDetect.setUTCHours(0, 0, 0, 0);

                    //Going hour by hour through the year will detect DST with shorter code but that could result in 8760
                    //FOR loops and several seconds of script execution time. Longer code narrows this down a little.
                    //Go one day at a time and find out approx time of DST and if there even is DST on this computer.
                    //Also need to make sure we catch the most current start and end cycle.
                    for (intDayOfYear = 1; intDayOfYear <= intYearDayCount; intDayOfYear++)
                    {
                        dtDstDetect.setUTCDate(dtDstDetect.getUTCDate() + 1);

                        if ((dtDstDetect.getTimezoneOffset() * (-1)) != intOffset && dtDstStartHold == '')
                        {
                            dtDstStartHold = new Date(dtDstDetect);
                        }
                        if ((dtDstDetect.getTimezoneOffset() * (-1)) == intOffset && dtDstStartHold != '')
                        {
                            dtDstStart = new Date(dtDstStartHold);
                            dtDstEnd = new Date(dtDstDetect);
                            dtDstStartHold = '';

                            //DST is being used in this timezone. Narrow the time down to the exact hour the change happens
                            //Remove 48 hours (a few extra to be on safe side) from the start/end date and find the exact change point
                            //Go hour by hour until a change in the timezone offset is detected.
                            dtDstStart.setUTCHours(dtDstStart.getUTCHours() - 48);
                            dtDstEnd.setUTCHours(dtDstEnd.getUTCHours() - 48);

                            //First find when DST starts
                            for (intHourOfYear = 1; intHourOfYear <= 48; intHourOfYear++)
                            {
                                dtDstStart.setUTCHours(dtDstStart.getUTCHours() + 1);

                                //If we found it then exit the loop. dtDstStart will have the correct value left in it.
                                if ((dtDstStart.getTimezoneOffset() * (-1)) != intOffset)
                                {
                                    break;
                                }
                            }

                            //Now find out when DST ends
                            for (intHourOfYear = 1; intHourOfYear <= 48; intHourOfYear++)
                            {
                                dtDstEnd.setUTCHours(dtDstEnd.getUTCHours() + 1);

                                //If we found it then exit the loop. dtDstEnd will have the correct value left in it.
                                if ((dtDstEnd.getTimezoneOffset() * (-1)) != (intOffset + 60))
                                {
                                    break;
                                }
                            }

                            //Check if DST is currently on for this time frame. If it is then return these values.
                            //If not then keep going. The function will either return the last values collected
                            //or another value that is currently in effect
                            if ((new Date()).getTime() >= dtDstStart.getTime() && (new Date()).getTime() <= dtDstEnd.getTime())
                            {
                                return new Array(dtDstStart, dtDstEnd);
                            }

                        }
                    }
                    return new Array(dtDstStart, dtDstEnd);
                }
                this.offset = TimezoneDetect();
                this.TimeZoneInfo = DstDetect();

                if (this.TimeZoneInfo[0].toString() != '' && this.TimeZoneInfo[1].toString() != '')
                    this.isDSTExists = true;

                if (this.isDSTExists)
                {
                    this.DSTstartDate = this.TimeZoneInfo[0].getMonth() + 1 + '/' + this.TimeZoneInfo[0].getDate() + '/' + this.TimeZoneInfo[0].getFullYear() + ' ' + this.TimeZoneInfo[0].getHours() + ':' + this.TimeZoneInfo[0].getMinutes();
                    this.DSTendDate = this.TimeZoneInfo[1].getMonth() + 1 + '/' + this.TimeZoneInfo[1].getDate() + '/' + this.TimeZoneInfo[1].getFullYear() + ' ' + this.TimeZoneInfo[1].getHours() + ':' + this.TimeZoneInfo[1].getMinutes();
                }
            };
            // #endregion
        };
        // #endregion

        // Menu
        // #region
        this.Menu = new function ()
        {
            var bIsSticking = false;
            var bIsPageLoading = true;
            var bPageNeedsScrollbar = false;

            this.setContentTopmargin = function ()
            {
                if (!$this.Page.b_IsUnderFullScreen)
                {
                    var b_VC = false // vertical centering
                    var i_HDiff = parseInt(($(window).height() - 620) / 2);
                    var i_Top = i_HDiff;

                    if (i_HDiff < 70 && $('.layoutA').length > 0)
                    {
                        i_Top = 70;
                    }
                    else if (i_HDiff < 0)
                    {
                        i_Top = 0;
                    }
                    if (i_HDiff > 150 && !b_VC) i_Top = 150;
                    $('#maincontentwindow').css('top', i_Top + 'px');
                }
            }

            this.setMenuContentPosition = function ()
            {
                var dom_MainWrapper = $('#mainWrapper');
                var dom_MainContent = $('#maincontentwindow');
                var dom_MenuContent = $('#menucontentwindow');
                var dom_SocialIcons = $('#social_icons');

                if (dom_MainWrapper.height() > 640)
                {
                    dom_MenuContent.css('top', dom_MainWrapper.height() - 100 + 'px');
                    // dom_SocialIcons.css('top', dom_MainWrapper.height() - 33 + 'px');
                }
                else if (dom_MainContent.height() < 400)
                {
                    dom_MenuContent.css('top', 530 + 'px');
                    // dom_SocialIcons.css('top', 592 + 'px');
                }

                if ($this.Page.b_IsUnderFullScreen)
                {
                    if ($('body').hasClass('layoutB'))
                    {
                        var i_FullScreenPanelHeight = $('#mainWrapper').height() - 165;
                        $('.jScrollPaneContainer').css('height', i_FullScreenPanelHeight + 'px');
                        $('#jm_scrollablemaincontent').css('height', i_FullScreenPanelHeight + 'px');
                    }
                    else
                    {
                        var i_FullScreenPanelHeight = $('#menucontentwindow').position().top - 40;
                        $('.jScrollPaneContainer').css('height', i_FullScreenPanelHeight + 'px');
                        $('#jm_scrollablemaincontent').css('height', i_FullScreenPanelHeight + 'px');
                    }

                    $this.Page.Threads.fn_v_StartThread('FullScreenScrollbarFixThread', function ()
                    {
                        $this.Content.attachScrollbar('MeetingScheduler.aspx');
                    }, 100, true);
                }

                $(window).bind('resize', $this.Menu.setContentTopmargin);
            };

            this.setNewFeaturesBubble = function ()
            {
                if ($this.Page.fn_o_getCookie('coolnewfeatures') != '1')
                    $('#menucontentwindow').append('<div id="newFeaturesBubble" class="sprt"><b></b></div>');
            }

            $(document).ready(function ()
            {
                //don't ask why, just let it be :) [Ok, so ie8 resize event fires 3 times for a single resize while others fire only once as they supposed to, furthermore
                //other browsers need two invocation of setmenucontentpos because during the first invocation they tend to read the positions of an element inside the 
                //method wrong or not the final positions. FF needs the second invocation, unless 1 grey column appears in the place of the scrollbar, while the third 
                //invocation is required by ie7 and ie6]
                $(window).bind("resize", function ()
                {
                    $this.Menu.setMenuContentPosition();

                    if ($this.Browser.eSessionType == SessionType.IE6 || $this.Browser.eSessionType == SessionType.IE7)
                        setTimeout("JoinMe.Menu.setMenuContentPosition();", 0);
                });
                $this.Menu.setMenuContentPosition();
                $this.Menu.setNewFeaturesBubble();
            });

            this.updateMainMenuContent = function (sPageUrl, jsonParams, oCallBack)
            {
                $('#jm_menucontent').parent().load(sPageUrl, jsonParams, function ()
                {
                    if (oCallBack)
                        oCallBack();
                    var dom_McntWindow = $('#menucontentwindow');
                    var i_ContentWidth = dom_McntWindow.width();
                    if (i_ContentWidth % 2 != 0)
                        dom_McntWindow.width((i_ContentWidth + 3));
                    else
                        dom_McntWindow.width((i_ContentWidth + 4));
                });
            };
        };
        // #endregion

        // Input limiters
        // #region
        this.InputLimiters = new function ()
        {
            this.fn_b_IsCharacter = function (o_Event)
            {
                return o_Event.keyCode >= 65 &&
                       o_Event.keyCode <= 90;
            };

            this.isBasicFunctionKey = function (oEvent)
            {
                var iCharCode = oEvent.keyCode;
                return (iCharCode == 8 ||    // backspace
                        iCharCode == 27 ||   // esc
                        iCharCode == 9 ||    // tab
                        iCharCode == 46 ||   // delete
                       (iCharCode >= 35 &&   // end, home
                        iCharCode <= 37) ||  // <-
                        iCharCode == 39 ||   // ->
                        iCharCode == 13 ||   // enter
                        iCharCode == 17 ||   // CTRL
                        iCharCode == 116)    // F5 
            };
            this.isNumber = function (oEvent)
            {
                var iCharCode = oEvent.keyCode;
                return (!oEvent.shiftKey &&
                       ((iCharCode >= 48 &&     // 0-9
                         iCharCode <= 57) ||
                        (iCharCode >= 96 &&     // Numlock 0-9
                         iCharCode <= 105)))
            };
            this.isNumber2 = function (sCharacter)
            {
                return (("1234567890").indexOf(sCharacter) != -1);
            };
            this.isSpecificKey = function (oEvent, iKeyCode)
            {
                if (iKeyCode.toString().indexOf(",") == -1)
                {
                    return (oEvent.keyCode == parseInt(iKeyCode));
                }
                else
                {
                    var a_keyCodes = iKeyCode.split(",");
                    for (var i in a_keyCodes)
                    {
                        if (parseInt($.trim(a_keyCodes[i])) == oEvent.keyCode)
                            return true;
                    }
                    return false;
                }
            };
            this.isSelectEvent = function (oEvent)
            {
                var iCharCode = oEvent.keyCode;
                if (oEvent.ctrlKey &&
                    iCharCode == 65)            // CTRL + A
                    return true
                else if (oEvent.shiftKey &&
                        (iCharCode == 35 ||     // SHIFT + HOME
                         iCharCode == 36 ||     // SHIFT + END
                         iCharCode == 37 ||     // SHIFT <-
                         iCharCode == 39))      // SHIFT ->
                    return true
                else
                    return false;
            };
            this.isCopy = function (oEvent)
            {
                var iCharCode = oEvent.keyCode;
                if ($this.Browser.ePlatformType == PaltformType.MAC)
                {
                    if (oEvent.metaKey &&
                        iCharCode == 67)       // CMD + C                        
                        return true;
                    else
                        return false;
                }
                else
                {
                    if (oEvent.ctrlKey &&
                        (iCharCode == 45 ||      // CTRL + INSERT
                         iCharCode == 67))       // CTRL + C
                        return true;
                    else
                        return false;
                }
            };
            this.isPaste = function (oEvent)
            {
                var iCharCode = oEvent.keyCode;
                if ($this.Browser.ePlatformType == PaltformType.MAC)
                {
                    if (oEvent.metaKey &&
                        iCharCode == 86)        // CMD + V
                        return true;
                    else
                        return false;
                }
                else
                {
                    if (oEvent.ctrlKey &&
                        iCharCode == 86)        // CTRL + V
                        return true;
                    else if (oEvent.shiftKey &&
                             iCharCode == 45)    // SHIFT + INSERT
                        return true;
                    else
                        return false;
                }
            };
            this.isCopyPaste = function (oEvent)
            {
                return $this.InputLimiters.isPaste(oEvent) ||
                       $this.InputLimiters.isCopy(oEvent);
            };
        };
        // #endregion

        // Content
        // #region
        this.Content = new function ()
        {
            this.o_resizeHandler = null;
            this.o_attach = null;
            var o_thisContent = this;

            this.updateMainContent = function (sPageUrl, jsonParams, oCallBack)
            { 
                $this.Page.markActualCSSForDelete();
                //$this.Page.removePageResourceFiles("css");
                $this.Page.ClearValidators();
                $this.CustomControls.fn_v_ClearControls();
                $(document).unbind("click");
                $this.Page.b_AutoFocus = true;

                if (jsonParams == undefined ||
                    !jsonParams["b_DontEmptyHash"])
                {
                    $this.Page.fn_v_LoadHashParameter("");
                }
                if ($this.Page.bIsUserLoggedIn && sPageUrl == c_j_ContentPages.c_s_Main)
                    sPageUrl = c_j_ContentPages.c_s_MyJoinMe;

                sPageUrl = sPageUrl.toLowerCase();

                if (PagesWhoRequireCSSFirst[sPageUrl] != undefined)
                {
                    for (var i in PagesWhoRequireCSSFirst[sPageUrl.toLowerCase()])
                        $this.Page.addCSSLink(PagesWhoRequireCSSFirst[sPageUrl.toLowerCase()][i]);
                }
                if (PagesWhoRequireJSFirst[sPageUrl] != undefined)
                {
                    for (var i in PagesWhoRequireJSFirst[sPageUrl.toLowerCase()])
                        $this.Page.addScriptLink(PagesWhoRequireJSFirst[sPageUrl.toLowerCase()][i]);
                }
                $("#jm_maincontent").parent().load("../html/" + sPageUrl, jsonParams, function ()
                {
                    window.setTimeout(function ()
                    {
                        $this.Page.fn_v_initSessionTimer();

                        if (jsonParams != undefined &&
                            jsonParams["b_DoubleClickable"] === true)
                            $("#X").show();
                        else
                            $("#X").hide();

                        //setMenuContentPosition() method is invoked twice, because of browser rendering anomalies
                        //some browser needs only just the first invocation, attachscrollbar() won't make any layout difference
                        //others needs a second setMenuContentPosition()
                        //note: only the second invocation is not enough (Chrome)
                        //$this.Menu.setMenuContentPosition();
                        if (!$this.Page.b_IsFromFacebook)
                        {
                            $this.Content.attachScrollbar(sPageUrl);
                            $this.Menu.setMenuContentPosition();
                            $this.Content.setTronText();
                        }

                        $this.Page.sLastPage = sPageUrl;

                        //mysterious bugfix for ie8, when menu text shifts up and down 1px according to whether a scrollbar is present in maincontent or not
                        //unfortunately this bug could not be fixed by css only
                        if (sPageUrl.indexOf("legalese.aspx") == -1 && $this.Browser.eSessionType == SessionType.IE8)
                        {
                            $("table.menucontent td.content").css("padding-bottom", "1").css("height", "29px");
                        }

                        if (!$this.Page.b_IsFromFacebook)
                        {
                            var oMainContent = $("#jm_maincontent");
                            var iNewContentWidth = oMainContent.find("table>tbody>tr.white_middle>td.white_middle>div").width();
                            oMainContent.parents("table:first").width(iNewContentWidth + 70);
                        }

                        //IE 6 png fix                    
                        if ($this.Browser.eSessionType == SessionType.IE6)
                    {
                        // IEPNGFix.update();
                            loadIe6Js();
                    }

                        $this.Page.removePageResourceFiles();

                        if (oCallBack)
                            oCallBack();

            
                        
                        // online help
                        if ($this.Page.Tooltip) $this.Page.Tooltip.discoverHelpNodes();
                    }, 0);
                });
            };

            this.setTronText = function ()
            {
                var dom_TronMain = $('#maincontentwindow .tron:first .tr:first');
                var dom_TrontextMain = $('#maincontentwindow .trontext:first');
                var dom_TronMenu = $('#menucontentwindow .tron:first .tr:first');
                var dom_TrontextMenu = $('#menucontentwindow .trontext:first');
                var i_CloseWidth = 0;
                var dom_XButton = $('#X');

                /* [EXP-5713]
                if (dom_XButton.css('display') == 'none')
                {
                dom_TrontextMain.css('margin-right', '0px');
                }
                else
                {
                dom_TrontextMain.css('margin-right', '27px');
                i_CloseWidth = 30;
                }
                */
                dom_TronMain.css('width', dom_TrontextMain.width() + (dom_TrontextMain.width() % 2) + i_CloseWidth + 'px');
                dom_TronMenu.css('width', dom_TrontextMenu.width() + (dom_TrontextMenu.width() % 2) + 'px');
            }

            this.attachScrollbar = function (s_PageUrl)
            {
                var dom_ScrollableMainContent = $("#jm_scrollablemaincontent");

                var fn_v_Scroll = function ()
                {
                    // Hide last opened combotextbox panel
                    if ($this.CustomControls.o_LastComboTextBox() != null)
                    {
                        $this.CustomControls.o_LastComboTextBox().fn_v_ShowOrHidePanel(false);
                        $this.CustomControls.o_LastComboTextBox().HTML().blur();
                    }
                    // Hide last opened bubble
                    if ($this.CustomControls.o_LastBubble() != null)
                        $this.CustomControls.o_LastBubble().Hide();
                }
                dom_ScrollableMainContent.unbind("scroll");
                dom_ScrollableMainContent.scroll(fn_v_Scroll);

                var fn_v_attach = function (b_BlockResizeObserving)
                {
                    if (b_BlockResizeObserving)
                    {
                        if ($this.Browser.bIsIE)
                        {
                            if ($this.Browser.eSessionType == SessionType.IE6 || $this.Browser.eSessionType == SessionType.IE7)
                            {
                                $this.Page.Threads.fn_b_StopThread("IE7ScrollbarFixThread");
                            }
                            else
                                dom_ResizeObserver.unbind("resize", fn_v_ContentResizeHandler);
                        }
                        else
                            dom_ResizeObserver.unbind('DOMSubtreeModified', fn_v_ContentResizeHandler);
                    }

                    dom_ScrollableMainContent.jScrollPane({ showArrows: true, scrollbarWidth: 8 });
                    dom_ScrollableMainContent.css("overflow", "visible");
                    // This div is created after the scrollbar has been attached
                    var dom_JScrollPaneContainer = dom_ScrollableMainContent.parent();
                    dom_JScrollPaneContainer.css("width", dom_JScrollPaneContainer.parent().width() + "px");

                    var fn_v_GenericClick = function (oEvent)
                    {
                        oEvent.stopPropagation();
                    }

                    /* ie scrolldrag mouseup preventer */
                    if ($this.Browser.bIsIE)
                    {
                        var dom_ScrolldDrag = $(".jScrollPaneDrag");

                        dom_ScrolldDrag.mousedown(function () { $(document).bind('mouseup', fn_v_SetDocumentMouseup); b_ScrollDragPreventer = true; });

                        var fn_v_SetDocumentMouseup = function ()
                        {

                            $(document).unbind('mouseup', fn_v_SetDocumentMouseup);
                            window.setTimeout(function () { b_ScrollDragPreventer = false; }, 0);
                        }

                        $(document).click(function (event) { if (b_ScrollDragPreventer) event.stopImmediatePropagation(); });
                    }

                    $(".jScrollPaneTrack")
                        .unbind("click", fn_v_GenericClick)
                        .click(fn_v_GenericClick);
                    $(".jScrollCap")
                        .unbind("click", fn_v_GenericClick)
                        .click(fn_v_GenericClick);
                    $(".jScrollArrowUp")
                        .unbind("click", fn_v_GenericClick)
                        .click(fn_v_GenericClick)
                        .addClass('sprt');
                    $(".jScrollArrowDown")
                        .unbind("click", fn_v_GenericClick)
                        .click(fn_v_GenericClick)
                        .addClass('sprt');
                    $(".jScrollPaneDragTop")
                        .addClass('sprt');
                    $(".jScrollPaneDragBottom")
                        .addClass('sprt');

                    if (b_BlockResizeObserving)
                    {
                        if ($this.Browser.bIsIE)
                        {
                            if ($this.Browser.eSessionType == SessionType.IE6 || $this.Browser.eSessionType == SessionType.IE7)
                            {
                                $this.Page.Threads.fn_v_StartThread("IE7ScrollbarFixThread", function ()
                                {
                                    fn_v_ContentResizeHandler();
                                }, 100, false);
                            }
                            else
                                dom_ResizeObserver.bind("resize", fn_v_ContentResizeHandler);
                        }
                        else
                            dom_ResizeObserver.bind("DOMSubtreeModified", fn_v_ContentResizeHandler);
                    }
                };

                fn_v_attach(false);

                // Meeting Scheduler needs another div
                var dom_ResizeObserver = dom_ScrollableMainContent;
                if (dom_ScrollableMainContent.children(":first").attr("id") == "ms_dom_container")
                    dom_ResizeObserver = dom_ScrollableMainContent.children(":first");

                var i_PreviousHeight = 0;
                var b_IsAttachInProgress = false;
                var o_TryEnter = null;
                var fn_v_ContentResizeHandler = function ()
                {
                    if (i_PreviousHeight != dom_ResizeObserver.height())
                    {
                        if (b_IsAttachInProgress == false)
                        {
                            b_IsAttachInProgress = true;
                            fn_v_attach(true);
                            i_PreviousHeight = dom_ResizeObserver.height();
                            if (o_TryEnter != null)
                            {
                                clearTimeout(o_TryEnter);
                                o_TryEnter = null;
                            }
                            if ($this.Browser.eSessionType == SessionType.Firefox)
                                fn_v_attach(true);
                            b_IsAttachInProgress = false;
                        }
                        else
                        {
                            if (o_TryEnter != null)
                            {
                                clearTimeout(o_TryEnter);
                                o_TryEnter = null;
                            }
                            o_TryEnter = setTimeout(fn_v_ContentResizeHandler, 10);
                        }
                    }
                };

                o_thisContent.o_resizeHandler = fn_v_ContentResizeHandler;
                o_thisContent.o_attach = fn_v_attach;

                if (s_PageUrl.indexOf("Legalese.aspx") == -1 && s_PageUrl.indexOf("MyLicenses.aspx") == -1)
                {
                    if ($this.Browser.bIsIE)
                    {
                        dom_ResizeObserver.unbind("resize", fn_v_ContentResizeHandler);
                        dom_ResizeObserver.bind("resize", fn_v_ContentResizeHandler);
                    }
                    else
                    {
                        dom_ResizeObserver.unbind('DOMSubtreeModified', fn_v_ContentResizeHandler);
                        dom_ResizeObserver.bind('DOMSubtreeModified', fn_v_ContentResizeHandler);
                    }
                }
                else
                {
                    if (!($this.Browser.eSessionType == SessionType.IE6 || $this.Browser.eSessionType == SessionType.IE7))
                        fn_v_attach(false);
                }

                if (s_PageUrl.indexOf("MyLicenses.aspx") == -1)
                {
                    // Fix for IE67 scrollbar bug, check onresize periodically because div onrize does not fire
                    if ($this.Browser.eSessionType == SessionType.IE6 || $this.Browser.eSessionType == SessionType.IE7)
                    {
                        $this.Page.Threads.fn_v_StartThread("IE7ScrollbarFixThread", function ()
                        {
                            fn_v_ContentResizeHandler();
                        }, 100, false);
                    }
                    // EXP-2378: Ugly hack, update scrollbar periodically on scheduler tab only on SA, CH
                    // #region
                    else if ($this.Browser.eSessionType == SessionType.Safari || $this.Browser.eSessionType == SessionType.Chrome)
                    {
                        if (s_PageUrl.toLowerCase().indexOf("meetingscheduler.aspx") != -1)
                        {
                            $this.Page.Threads.fn_v_StartThread("SchedulerSafariScrollbarFixThread", function ()
                            {
                                fn_v_ContentResizeHandler();
                            }, 100, false);
                        }
                    }
                    // #endregion
                }
            };

            $(document).ready(function ()
            {
                $this.Content.attachScrollbar("");
            });
        };
        // #endregion

        // Page
        // #region
        this.Page = new function ()
        {
            this.o_backgroundImage = null;
            this.iThemeId = -1;
            this.bIsUserLoggedIn = false;
            this.bIsFirstLogin = false;
            this.b_IsRememberMe = false;
            this.b_IsUserLoggedInByEncryptedCookie = false;
            this.b_IsUserLoggedInByOneTimeTicket = false;
            this.b_IsUserCommesFromHost = false;
            var aResourceFiles = {};
            var aValidators = {};
            var sLastPage = "";
            this.sCurrentLanguage = "en";
            this.Object = null;
            this.ModalDialog = null;
            this.ValidatorControl = null;
            this.ValidatorControlPosition = null;
            var sInValidControl = null;
            this.b_IsDevelopmentServer = false;
            this.s_RedirectTo = "";
            this.sTicket = "";
            this.sInvitationCode = "";
            this.iProfileID = -1;
            this.b_AutoFocus = true;
            this.s_Location = "";
            this.s_SecureLocation = "";
            this.s_FactoryBg = "";
            this.s_UserBg = "";
            this.a_BackgroundPreview;
            var a_HashParameters = {};
            this.FocusedElement = null;
            this.j_RedirectPageParameters = null;
            this.b_SaveConfirmed = true;
            var b_IsPageLoaded = false;
            var i_bgImageWidth = 0;
            var i_bgImageHeight = 0;
            var d_bgImageRatio = 0;
            this.b_LockValidationForComboSelect = false;
            this.b_IsFromFacebook = false;
            this.b_AllowSystemDialog = true;
            this.b_IsUnderFullScreen = false;
            this.b_Register = false;
            this.b_LogoutTriggered = false;

            this.b_IsPageLoaded = function (o_PageHasBeenLoaded)
            {
                if (o_PageHasBeenLoaded === undefined)
                    return b_IsPageLoaded;
                else if (typeof (o_PageHasBeenLoaded) === "boolean")
                    b_IsPageLoaded = o_PageHasBeenLoaded;
            };
            var a_JsFilesToLoad = [];

            this.fn_v_LoadHashParameter = function (s_Hash)
            {
                a_HashParameters = {};

                var a_SplittedHash = s_Hash.split("&&");

                for (var i in a_SplittedHash)
                {
                    var s_Item = a_SplittedHash[i];
                    var i_IndexOfParameter = s_Item.indexOf("=");
                    a_HashParameters[s_Item.substring(0, i_IndexOfParameter)] = $.trim(s_Item.substr(i_IndexOfParameter + 1));
                }
            };

            this.fn_s_GetParameterInHash = function (s_ParameterName)
            {
                var s_HashValue = a_HashParameters[s_ParameterName];

                if (s_HashValue)
                {
                    return s_HashValue;
                }

                return null;
            };

            // #region DefaultControl
            this.AddDefaultControlToForm = function (o_Control)
            {
                if (!o_Control ||
                    !o_Control.HTML().hasClass("button"))
                    return;

                var dom_Form = o_Control.HTML().parents("form");
                if (dom_Form.length == 1)
                {
                    var o_KeyDown = function (o_Event)
                    {
                        if (o_Event.keyCode == 13 && !$this.Page.b_LockValidationForComboSelect)
                        {
                            $this.Page.Threads.fn_v_StartThread("form_Submit",
                                                                 function () { o_Control.HTML().click(); },
                                                                 20,
                                                                 true);
                        }
                    };

                    dom_Form.unbind("keydown", o_KeyDown).keydown(o_KeyDown);
                }
            }
            // #endregion

            this.AddMetaTag = function (s_Name, s_Content)
            {
                var sb = "<meta name='" + s_Name + "' content='" + s_Content + "'/>";
                $("head").append(sb);
            }

            // Threads
            // #region
            this.Threads = new function ()
            {
                /// <summary>
                /// Manage Threads started by this Page
                /// </summary>

                var o_this = this;

                var a_Intervals = {};
                /// <summary>
                /// Collection of Threads started by setInterval
                /// </summary>
                var a_Timeouts = {};
                /// <summary>
                /// Collection of Threads started by setTimeout
                /// </summary>

                var a_Intervals_framework = {};
                var a_Timeouts_framework = {};

                var i_QuicklyStartedThreadCounter = 0;
                /// <summary>
                /// This incremental number is the part of quickly started thread IDs
                /// </summary>
                var b_StoreThreadReferences = true;

                // fn_v_StopAllThreads
                // #region
                this.fn_v_StopAllThreads = function ()
                {
                    /// <summary>
                    /// Stop all threads started by this page
                    /// </summary>

                    for (var sKey in a_Intervals)
                    {
                        clearInterval(a_Intervals[sKey]);
                    }
                    a_Intervals = {};

                    for (var sKey in a_Timeouts)
                    {
                        clearTimeout(a_Timeouts[sKey]);
                    }
                    a_Timeouts = {};
                };
                // #endregion

                // fn_b_StopThread
                // #region
                this.fn_b_StopThread = function (s_ThreadID)
                {
                    /// <summary>
                    /// Stop Thread by ID
                    /// </summary>
                    /// <field name="s_ThreadID">Identifier of a Thread</field>

                    var b_Succed = true;
                    if (b_StoreThreadReferences)
                    {
                        if (a_Intervals[s_ThreadID])
                            clearInterval(a_Intervals[s_ThreadID]);
                        else if (a_Timeouts[s_ThreadID])
                            clearTimeout(a_Timeouts[s_ThreadID]);
                        else
                            b_Succed = false;
                    }
                    else
                    {
                        if (a_Intervals_framework[s_ThreadID])
                            clearInterval(a_Intervals_framework[s_ThreadID]);
                        else if (a_Timeouts_framework[s_ThreadID])
                            clearTimeout(a_Timeouts_framework[s_ThreadID]);
                        else
                            b_Succed = false;
                    }
                    return b_Succed;
                };
                // #endregion

                // fn_v_StartThread
                // #region
                this.fn_v_StartThread = function (s_ThreadID, fn_v_CodeFunct, i_Delay, b_RunOnce)
                {
                    /// <summary>
                    /// Start a new Thread
                    /// </summary>
                    /// <field name="s_ThreadID">Identifier of a Thread</field>
                    /// <field name="fn_v_CodeFunct">Represent a function to execute</field>
                    /// <field name="i_Delay">Delay time between interations</field>
                    /// <field name="b_RunOnce">Execute code once or execute it periodically</field>

                    this.fn_b_StopThread(s_ThreadID);
                    if (b_RunOnce)
                    {
                        var o_ThreadReference = setTimeout(function ()
                        {
                            fn_v_CodeFunct();
                            o_this.fn_b_StopThread(s_ThreadID);
                        }, i_Delay);

                        if (b_StoreThreadReferences)
                            a_Timeouts[s_ThreadID] = o_ThreadReference;
                        else
                            a_Timeouts_framework[s_ThreadID] = o_ThreadReference;
                    }
                    else
                    {
                        var o_ThreadReference = setInterval(fn_v_CodeFunct, i_Delay);
                        if (b_StoreThreadReferences)
                            a_Intervals[s_ThreadID] = o_ThreadReference;
                        else
                            a_Intervals_framework[s_ThreadID] = o_ThreadReference;
                    }
                };
                // #endregion     

                // fn_v_StartThreadNow
                // #region
                this.fn_v_StartThreadNow = function (fn_v_CodeFunct)
                {
                    /// <summary>
                    /// Quickly start a new Thread right now
                    /// </summary>
                    /// <field name="fn_v_CodeFunct">Represent a function to execute</field>

                    this.fn_v_StartThread("QuicklyStartedThread_" + i_QuicklyStartedThreadCounter, fn_v_CodeFunct, 0, true);
                    i_QuicklyStartedThreadCounter++;
                };
                // #endregion

                // fn_o_GetThread
                // #region
                this.fn_o_GetThread = function (s_ThreadID)
                {
                    /// <summary>
                    /// Return a Thread Object by ID
                    /// </summary>
                    /// <field name="s_ThreadID">Identifier of a Thread</field>

                    if (b_StoreThreadReferences)
                    {
                        if (a_Intervals[s_ThreadID])
                            return a_Intervals[s_ThreadID]
                        else if (a_Timeouts[s_ThreadID])
                            return a_Timeouts[s_ThreadID]
                        else
                            return null;
                    }
                    else
                    {
                        if (a_Intervals_framework[s_ThreadID])
                            return a_Intervals_framework[s_ThreadID]
                        else if (a_Timeouts_framework[s_ThreadID])
                            return a_Timeouts_framework[s_ThreadID]
                        else
                            return null;
                    }

                };
                // #endregion

                // fn_v_AllowThreadReferencesStore
                // #region
                this.fn_v_AllowThreadReferencesStore = function (b_AllowThreadReferencesStore)
                {
                    /// <summary>
                    /// Allow or disallow thread references store
                    /// </summary>
                    /// <field name="b_AllowThreadReferencesStore">Allow or disallow thread references store</field>

                    b_StoreThreadReferences = b_AllowThreadReferencesStore;
                };
                // #endregion
            }
            // #endregion

            // Validation
            // #region
            this.fn_s_InValidControlId = function ()
            {
                return sInValidControl;
            };

            this.ClearValidators = function ()
            {
                $this.Page.ValidatorControl = null;
                aValidators = {};
            };

            var fn_HideValidator = function (o_Control)
            {
                $this.Page.ValidatorControl.Hide();
                o_Control.removeClass("error");
                if (o_Control.hasClass("combotextbox"))
                {
                    var o_ComboTextBox = $this.CustomControls.ComboTextBox.get(o_Control.attr("id"));
                    o_ComboTextBox.HTMLButton().removeClass("error");
                    o_ComboTextBox.HTMLButton_p().removeClass("error");
                }
                sInValidControl = null;
            };

            var fn_ShowValidator = function (o_Control, b_PositionError)
            {
                var s_ControlId = o_Control.attr("id");
                if (b_PositionError)
                {
                    var offset;
                    if (o_Control.attr('type') == 'password')
                        offset = o_Control.parent().position();
                    else
                        offset = o_Control.position();
                    var left = offset.left;
                    var top = offset.top;
                    if ($this.Browser.bIsIE)
                    {
                        left += 2;
                    }
                    if ($this.Page.ValidatorControl.Arrow().hasClass("left"))
                    {
                        left += o_Control.width() + 9;
                        top -= 11;
                    }
                    else if ($this.Page.ValidatorControl.Arrow().hasClass("bottom"))
                    {
                        left -= 19;
                        top -= $this.Page.ValidatorControl.HTML().height() + 2;
                    }
                    if (o_Control.hasClass("checkbox"))
                    {
                        top += 20;
                        left += 15;
                    }
                    if (o_Control.hasClass("combotextbox"))
                    {
                        left += 22;
                    }

                    $this.Page.ValidatorControl.Show(left, top);
                }
                else
                {
                    if ($this.Page.ValidatorControlPosition)
                    {
                        $this.Page.ValidatorControl.Show($this.Page.ValidatorControlPosition.X, $this.Page.ValidatorControlPosition.Y);
                        $this.Page.ValidatorControlPosition = null;
                    }
                    else
                        $this.Page.ValidatorControl.Show();
                }
                o_Control.addClass("error");
                if (o_Control.hasClass("combotextbox"))
                {
                    var o_ComboTextBox = $this.CustomControls.ComboTextBox.get(s_ControlId);
                    o_ComboTextBox.HTMLButton().addClass("error");
                    o_ComboTextBox.HTMLButton_p().addClass("error");
                }
                sInValidControl = s_ControlId;
            };

            this.AddValidator = function (sControlId, oIsValidFunction, bLiveValidation, bPositionError, bForceValidation)
            {
                aValidators[sControlId] = { fn_Callback: oIsValidFunction, b_PositionError: bPositionError };
                var oControl = $('#' + sControlId);

                if ($this.Page.ValidatorControl == null)
                {
                    //$("form:first").append($("<a id='error'></a>"));
                    if (oControl.attr('type') == 'password')
                        oControl.parent().parent().append($("<a id='error'></a>"));
                    else
                        oControl.parent().append($("<a id='error'></a>"));

                    $this.Page.ValidatorControl = new $this.CustomControls.Bubble({ "id": "error" });
                }

                if (bLiveValidation)
                {
                    if (oControl.hasClass("combotextbox"))
                    {
                        var oCombo = $this.CustomControls.ComboTextBox.get(sControlId);
                        oCombo.HTMLReadOnlyDiv().click(function ()
                        {
                            if (sInValidControl == sControlId)
                            {
                                fn_HideValidator(oControl);
                            }
                        });
                        oCombo.HTMLButton().click(function ()
                        {
                            if (sInValidControl == sControlId)
                            {
                                fn_HideValidator(oControl);
                            }
                        });
                    }
                    if (oControl.hasClass("textbox"))
                    {
                        oControl.blur(function ()
                        {
                            var sControlVal = oControl.val();
                            if (sControlVal != '' && sControlVal != $this.CustomControls.TextBox.get(oControl.attr('id')).sWatermark)
                            {
                                if ((!$this.Page.ValidatorControl.IsVisible() ||
                                     bForceValidation) &&
                                    (typeof (oIsValidFunction) == "string" ? !eval(oIsValidFunction) : !oIsValidFunction()))
                                {
                                    fn_ShowValidator(oControl, bPositionError);
                                }
                            }
                        });
                        oControl.focus(function ()
                        {
                            if (sInValidControl == sControlId)
                            {
                                fn_HideValidator(oControl);
                            }
                        });
                    }
                    else if (oControl.hasClass("checkbox"))
                    {
                        $this.CustomControls.CheckBox.get(sControlId).OnCheck(function ()
                        {
                            if (!$this.Page.ValidatorControl.IsVisible() ||
                                sInValidControl == sControlId)
                            {
                                if (typeof (oIsValidFunction) == "string" ? !eval(oIsValidFunction) : !oIsValidFunction())
                                {
                                    fn_ShowValidator(oControl, bPositionError);
                                }
                                else
                                {
                                    fn_HideValidator(oControl);
                                }
                            }
                        }, "validation");
                    }
                }
            };

            this.ValidateControl = function (b_ShowBubble, s_ControlId)
            {
                if (!s_ControlId)
                    s_ControlId = sInValidControl;

                if (aValidators[s_ControlId])
                {
                    if (typeof (aValidators[s_ControlId].fn_Callback) == "string" ? !eval(aValidators[s_ControlId].fn_Callback) : !aValidators[s_ControlId].fn_Callback())
                    {
                        if (b_ShowBubble)
                        {
                            var o_Control = $("#" + s_ControlId);
                            fn_ShowValidator(o_Control, aValidators[s_ControlId].b_PositionError);
                        }
                        return false;
                    }
                    else
                    {
                        var o_Control = $("#" + s_ControlId);
                        if (sInValidControl == s_ControlId)
                        {
                            fn_HideValidator(o_Control);
                        }
                    }
                }
                return true;
            }

            this.IsPageValid = function (b_ShowBubbles)
            {
                if ($this.Page.ValidatorControl != null && $this.Page.ValidatorControl.IsVisible())
                    return false;

                for (var control in aValidators)
                {
                    if (typeof (aValidators[control].fn_Callback) == "string" ? !eval(aValidators[control].fn_Callback) : !aValidators[control].fn_Callback())
                    {
                        if (b_ShowBubbles == undefined)
                            b_ShowBubbles = true;

                        if (b_ShowBubbles)
                        {
                            var o_Control = $("#" + control);
                            fn_ShowValidator(o_Control, aValidators[control].b_PositionError);
                        }

                        return false;
                    }
                }

                return true;
            };
            // #endregion

            // Script & CSS stuff
            // #region
            this.markActualCSSForDelete = function ()
            {
                for (var sKey in aResourceFiles)
                {
                    if (aResourceFiles[sKey] == true)
                    {
                        $('link[href=' + sKey + ']:first').addClass('remove_css');
                        delete aResourceFiles[sKey];
                    }
                }
            };

            this.removePageResourceFiles = function ()
            {
                setTimeout(function ()
                {
                    $('link.remove_css').remove();
                }, 0);
            };

            this.addScriptLink = function (sScriptFile, oOnLoad, o_Parameters)
            {
                var oNode = document.createElement("script");
                oNode.type = "text/javascript";
                oNode.src = sScriptFile;

                var o_FunctionEvaluation = function (element)
                {
                    delete a_JsFilesToLoad[element.src.replace(window.location.protocol + "//" + window.location.host, "")];
                    var i_JsFilesRemainingToLoad = 0;
                    for (var item in a_JsFilesToLoad)
                    {
                        i_JsFilesRemainingToLoad++;
                    }

                    if (i_JsFilesRemainingToLoad === 0)
                        $this.Page.b_IsPageLoaded(true);

                    $this.Page.Threads.fn_v_StartThread(oOnLoad,
                    function ()
                    {
                        if ($this.Page.b_IsPageLoaded())
                        {
                            $this.Page.Threads.fn_b_StopThread(oOnLoad);

                            if (o_Parameters)
                                eval(oOnLoad + o_Parameters + ';');
                            else
                                eval(oOnLoad + '();');
                        }
                    }, 100, false);
                };

                if (oOnLoad &&
                    oOnLoad != '')
                {
                    a_JsFilesToLoad[sScriptFile] = true;
                    $this.Page.b_IsPageLoaded(false);
                    if ($this.Browser.bIsIE)
                    {
                        oNode.onreadystatechange = function ()
                        {
                            if (this.readyState == 'loaded' ||
                                this.readyState == 'complete')
                            {
                                o_FunctionEvaluation(this);
                            };
                        }
                    }
                    else
                    {
                        oNode.onload =
                            function ()
                            {
                                o_FunctionEvaluation(this);
                            };
                    }
                }
                document.getElementsByTagName("HEAD")[0].appendChild(oNode);
            };

            this.addCSSLink = function (sCSSFile)
            {
                var oNode = document.createElement("link");
                oNode.type = "text/css";
                oNode.rel = "Stylesheet";
                oNode.href = sCSSFile;
                document.getElementsByTagName("HEAD")[0].appendChild(oNode);
                setTimeout(function ()
                {
                    aResourceFiles[sCSSFile] = true;
                }, 0);
            };
            // #endregion

            // Ajax Setup & Communication
            // #region
            $.ajaxSetup(
            { cache: false, error: function (j_Response, s_TextStatus, s_ErrorThrown)
            {
                if (j_Response.status == 0)
                {
                    // TODO
                }
                else if (j_Response.status == 404)
                {
                    window.location = c_j_ErrorPages.c_s_PageNotFound;
                }
                else if (j_Response.status == 500)
                {
                    window.location = c_j_ErrorPages.c_s_UnknownError;
                }
                else if (s_ErrorThrown == 'parsererror')
                {
                    window.location = c_j_ErrorPages.c_s_UnknownError;
                }
                else if (s_ErrorThrown == 'timeout')
                {
                    window.location = c_j_ErrorPages.c_s_UnknownError;
                }
                else
                {
                    window.location = c_j_ErrorPages.c_s_UnknownError;
                }
            }
            });

            // fn_v_SendAjax
            // #region
            this.fn_v_SendAjax = function (s_WebService, s_MethodToCall, o_Data, fn_v_RetFunc)
            {
                $.ajax(
                {
                    type: "POST",
                    url: s_WebService + s_MethodToCall,
                    cache: false,
                    data: o_Data == undefined ? null : (typeof (o_Data) == "string" ? o_Data : $.jsonToString(o_Data)),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (j_Response)
                    {
                        $this.Page.fn_v_initSessionTimer();
                        if (j_Response.d.iError == 2)
                        {
                            $this.Page.b_LogoutTriggered = true;
                            $this.Page.fn_v_SendAjax(WebServices.Common, 'logout', null, function ()
                            {
                                $this.Page.bIsUserLoggedIn = false;
                                $this.Page.fn_v_deleteCookie('encryptedauthcookie');
                                $this.Page.b_IsUserLoggedInByEncryptedCookie = false;
                                $this.Page.b_IsUserLoggedInByOneTimeTicket = false;
                                try
                                {
                                    parent.window.location = $this.Page.s_Location + 'login'; // /login
                                }
                                catch (e) { ; };
                            });
                        }
                        else if (j_Response.d.iError == 4)
                        {
                            window.location.reload();
                        }
                        else if (j_Response.d.iError == 999)
                        {
                            window.location = c_j_ErrorPages.c_s_UnknownError;
                        }
                        else
                        {
                            if (fn_v_RetFunc)
                                fn_v_RetFunc(j_Response.d);
                        }
                    }
                });
            };
            // #endregion

            // fn_v_SendAjax_v2
            // #region
            this.fn_v_SendAjax_v2 = function (s_WebService, s_MethodToCall, j_Data, fn_v_RetFunc)
            {
                // Validate j_Data
                var s_Data = null;
                if (j_Data == undefined)
                    s_Data = null;
                else if (typeof (j_Data) == "string")
                    s_Data = null;
                else
                    s_Data = $.jsonToString_v2(j_Data);

                $.ajax(
                {
                    type: "POST",
                    url: s_WebService + s_MethodToCall,
                    cache: false,
                    data: s_Data,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (j_Response)
                    {
                        $this.Page.fn_v_initSessionTimer();
                        if (j_Response.d.iError == 2)
                        {
                            $this.Page.b_LogoutTriggered = true;
                            $this.Page.fn_v_SendAjax(WebServices.Common, 'logout', null, function ()
                            {
                                $this.Page.bIsUserLoggedIn = false;
                                $this.Page.fn_v_deleteCookie('encryptedauthcookie');
                                $this.Page.b_IsUserLoggedInByEncryptedCookie = false;
                                $this.Page.b_IsUserLoggedInByOneTimeTicket = false;
                                try
                                {
                                    parent.window.location = $this.Page.s_Location + 'login'; // /login
                                }
                                catch (e) { ; };
                            });
                        }
                        else if (j_Response.d.iError == 4)
                        {
                            window.location.reload();
                        }
                        else if (j_Response.d.iError == 999)
                        {
                            window.location = c_j_ErrorPages.c_s_UnknownError;
                        }
                        else
                        {
                            if (fn_v_RetFunc)
                                fn_v_RetFunc(j_Response.d);
                        }
                    }
                });
            };
            // #endregion

            // #endregion

            // Cookie manipulation
            // #region
            this.fn_v_setCookie = function (name, value, expire_day)
            {
                var expiredate = new Date();
                if (!expire_day)
                    expiredate.setTime(expiredate.getTime() + (365 * 24 * 3600 * 1000));
                else
                    expiredate.setTime(expiredate.getTime() + (expire_day * 24 * 3600 * 1000));

                document.cookie = name + "=" + escape(value) +
		    "; expires=" + expiredate.toGMTString() + "; secure";
            };

            this.fn_o_getCookie = function (name)
            {
                // Search after the first one
                var prefix = " " + name + "=";
                var begin = document.cookie.indexOf(prefix);

                // If not found search of all
                if (begin == -1)
                {
                    prefix = name + "=";
                    begin = document.cookie.indexOf(prefix);
                }
                // We need this if a cookie's name is at the end of another's one!

                if (begin == -1) return null;
                var end = document.cookie.indexOf(";", begin);
                if (end == -1) end = document.cookie.length;
                return unescape(document.cookie.substring(begin + prefix.length, end));
            };

            this.fn_v_deleteCookie = function (name)
            {
                if (this.fn_o_getCookie(name))
                {
                    document.cookie = name + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
                }
            };

            this.fn_v_OpenFAQ = function (s_Params)
            {
                var s_QueryString = s_Params.replace('faq/', '').replace('/', '');
                if (s_QueryString.length == 0)
                    s_QueryString = 'jm_faq_header_top10';
                var s_LocationToGo = $this.Page.s_Location + 'welcome/webhelp/joinme/join.me/' + s_QueryString + '.html';
                top ? (top.window.location.href = s_LocationToGo) : (window.location.href = s_LocationToGo);
            };

            this.fn_v_loginByEncryptedCookie = function ()
            {
                var o_TimeZone = $this.Browser.oTimeZone;
                $this.Page.fn_v_SendAjax(WebServices.Common, "loginByEncryptedCookie",
                {
                    'iOffset': o_TimeZone.offset,
                    'bDSTExists': o_TimeZone.isDSTExists,
                    'dDSTStartDate': o_TimeZone.DSTstartDate,
                    'dDSTEndDate': o_TimeZone.DSTendDate
                }, fn_v_loginByEncryptedCookieRet);
            };

            var fn_v_loginByEncryptedCookieRet = function (data)
            {
                if (data.iError == 0 || data.iError == 150 || data.iError == 160)
                {
                    $this.Page.bIsUserLoggedIn = true;
                    $this.Page.b_IsUserLoggedInByEncryptedCookie = true;
                    if (data.iError == 150);
                    // $this.Content.updateMainContent("/TrialExpired.aspx"); [EXP-7352]
                    else if (data.iError == 160)
                        $this.Content.updateMainContent("/FailedRenewal.aspx");
                    else
                        $this.Content.updateMainContent("/MyJoinMe.aspx", { b_DontEmptyHash: true });

                    if (!data.b_DisablePersonalBackground && data.s_BigImageLocation.length != 0)
                        $this.Page.setBackgroundImage(data.s_BigImageLocation);
                    else
                        $this.Page.setBackgroundImage($this.Page.s_FactoryBg);
                }
                else
                {
                    $this.Page.setBackgroundImage($this.Page.s_FactoryBg);
                }
            };

            var s_UrlToGo = '';
            this.fn_v_loginByOneTimeCodeFromHost = function (s_Params)
            {
                $this.Page.b_IsUserCommesFromHost = true;
                if ($this.Browser.eSessionType == SessionType.IE6)
                {
                    $this.Content.updateMainContent('TalkNerdy.aspx');
                    $this.Page.setBackgroundImage($this.Page.s_FactoryBg);
                    return;
                }
                var s_QueryString = s_Params.replace('redirlg/', '');
                var s_OneTimeTicket = s_QueryString.substring(s_QueryString.lastIndexOf('/') + 1);
                s_UrlToGo = s_QueryString.replace('/' + s_OneTimeTicket, '');
                var o_TimeZone = $this.Browser.oTimeZone;

                $this.Page.fn_v_SendAjax(WebServices.Common, "loginByOneTimeCodeFromHost",
                {
                    'OneTimeTicket': s_OneTimeTicket,
                    'Offset': o_TimeZone.offset,
                    'DSTExists': o_TimeZone.isDSTExists,
                    'DSTStartDate': o_TimeZone.DSTstartDate,
                    'DSTEndDate': o_TimeZone.DSTendDate
                }, fn_v_loginByOneTimeCodeFromHostRet);
            };

            var fn_v_loginByOneTimeCodeFromHostRet = function (j_Data)
            {
                if (j_Data.iError == 0 || j_Data.iError == 150 || j_Data.iError == 160)
                {
                    $this.Page.bIsUserLoggedIn = true;
                    if (j_Data.iError == 150)
                    {
                        // $this.Content.updateMainContent('/TrialExpired.aspx'); [EXP - 7352]
                    }
                    else if (j_Data.iError == 160)
                    {
                        $this.Content.updateMainContent('/FailedRenewal.aspx');
                    }
                    else
                    {
                        // Analise page request from host
                        switch (s_UrlToGo)
                        {
                            case '1':
                                $this.Content.updateMainContent('/MeetingScheduler.aspx');
                                break;
                            case '2':
                                $this.Page.b_IsUserLoggedInByOneTimeTicket = true;
                                $this.Content.updateMainContent('/MyJoinMe.aspx', { b_DontEmptyHash: true });
                                break;
                            case '3':
                                $this.Content.updateMainContent('/AudioSettings.aspx');
                                break;
                            case '4':
                                $this.Content.updateMainContent('/PersonalInformation.aspx');
                                break;
                            case '5':
                                $this.Content.updateMainContent("/Purchase/PurchaseSelect.aspx", { 'b_DoubleClickable': true });
                                break;
                            default:
                                $this.Page.b_IsUserLoggedInByOneTimeTicket = true;
                                $this.Content.updateMainContent('/MyJoinMe.aspx', { b_DontEmptyHash: true });
                        }
                    }
                    if (!j_Data.b_DisablePersonalBackground && j_Data.s_BigImageLocation.length != 0)
                        $this.Page.setBackgroundImage(j_Data.s_BigImageLocation);
                    else
                        $this.Page.setBackgroundImage($this.Page.s_FactoryBg);
                }
                else
                {
                    $this.Page.setBackgroundImage($this.Page.s_FactoryBg);
                }
            };
            // #endregion            

            // Setup Modal Dialog
            // #region
            function o_ModalDialog()
            {
                var o_Bubble = new $this.CustomControls.Bubble({
                    id: 'modalDialog',
                    s_css: 'modalDialog',
                    color: 'white',
                    arrow: 'none'
                });

                o_Bubble.HTML().css("z-index", "-1");
                //o_Bubble.HTML().css("opacity", "0");
                o_Bubble.HTML().css('top', '-100000px');
                o_Bubble.HTML().css('display', 'block');

                var closeModalDialog = function ()
                {
                    $this.Page.b_AllowSystemDialog = true;
                    $this.Page.ModalDialog.Hide();
                };

                var closeModalDialogOnEsc = function (o_Event)
                {
                    if ($this.InputLimiters.isSpecificKey(o_Event, KeyCodes.Esc))
                    {
                        $this.Page.b_AllowSystemDialog = true;
                        $this.Page.ModalDialog.Hide();
                    }
                }

                // Create backshadow
                var dom_HTMLDialogBackground = $("<div></div>")
                                                .addClass("bubbleback")
                                                .css("z-index", "-1")
                                                .click(function (o_Event)
                                                {
                                                    o_Event.stopPropagation();
                                                });

                // Create close button
                var dom_NewMainContent = $("<div></div>")
                                            .css("padding-top", "10px");
                var dom_CloseIconButton = $('<div></div>')
                                        .addClass('sprt modalclosebutton')
                                        .click(closeModalDialog);
                var dom_CloseIconButton_p = $('<div></div>')
                                          .addClass('joci_rel')
                                          .addClass('modalclosebutton_p');

                var dom_NewContent = $("<div></div>");

                dom_NewMainContent.append(dom_CloseIconButton);
                dom_NewMainContent.append(dom_NewContent);
                dom_NewMainContent.append("<a id='closeButton'></a>");
                $("body").append(dom_HTMLDialogBackground);

                o_Bubble.Content(dom_NewMainContent);

                var dom_CloseButton = new $this.CustomControls.Button({
                    's_Id': 'closeButton',
                    's_Text': "close",
                    'i_TabIndex': 9999,
                    'b_KeepInMemory': true,
                    's_Style': 'margin-top: 10px;'
                });

                dom_CloseButton.OnClick(closeModalDialog, "close");

                this.Content = function (o_content)
                {
                    if (o_content)
                    {
                        dom_NewContent.html("");
                        $this.Content.attachScrollbar("");
                        dom_NewContent.html(o_content);
                    }
                    else
                    {
                        return dom_NewContent.html();
                    }
                }

                this.Show = function ()
                {
                    var oHTML = o_Bubble.HTML();
                    var dom_Table = oHTML.children(':first');
                    oHTML.css('margin-left', -1 * Math.round(dom_Table.outerWidth() / 2) + 'px');
                    oHTML.css('margin-top', -1 * Math.round(dom_Table.outerHeight() / 2) + 'px');
                    oHTML.css('left', '50%');
                    oHTML.css('top', '50%');

                    dom_CloseButton.HTML().focus().focus();
                    $(document).one("keydown", closeModalDialogOnEsc);
                    o_Bubble.HTML().css("z-index", "100001");
                    o_Bubble.HTML().css("top", "50%");
                    dom_HTMLDialogBackground.css("z-index", "10000");
                }

                this.Hide = function ()
                {
                    $(document).unbind("click", closeModalDialogOnEsc);
                    o_Bubble.HTML().css("z-index", "-1");
                    o_Bubble.HTML().css("top", "-100000px");
                    dom_HTMLDialogBackground.css("z-index", "-1");
                }

                this.b_ShowCloseButton = function (b_Visible)
                {
                    if (b_Visible)
                        dom_CloseButton.HTML().show();
                    else
                        dom_CloseButton.HTML().hide();
                }

                this.HTML = function ()
                {
                    return o_Bubble.HTML();
                }

                this.HTMLDialogBackground = function ()
                {
                    return dom_HTMLDialogBackground;
                }

                return this;
            };

            this.fn_v_setupModalDialog = function ()
            {
                if (this.ModalDialog == null)
                {
                    var dom_ModalDialogReplacement = $('<a></a>')
                                                      .attr('id', 'modalDialog');
                    $('body').append(dom_ModalDialogReplacement);
                    this.ModalDialog = new o_ModalDialog();
                }
            }
            // #endregion

            // Setup Tooltip
            // #region
            function o_Tooltip()
            {
                var o_Bubble = new $this.CustomControls.Bubble({
                    id: 'tooltip',
                    s_css: 'modalDialog',
                    color: 'white',
                    arrow: 'bottom'
                });

                o_Bubble.HTML().mouseover(function () { $(this).css('display', 'block') });
                o_Bubble.HTML().mouseout(function () { $(this).css('display', 'none') });

                this.HTML = function ()
                {
                    return o_Bubble.HTML();
                }

                this.discoverHelpNodes = function ()
                {
                    $('.olh').mouseover(function () { show(this) }).mouseout(hide);
                    $('.olh:not(.inline)').append('<b class="qm sprt"></b>');
                    $('.olh.inline').css('padding-right', '0px');

                    for (var i in aLocalizations)
                    {
                        if (i.indexOf('OnlineHelp_') != -1) $('#' + (i.split('_')[2])).attr('alt', aLocalizations[i]);
                    }
                }

                var show = function (o_node)
                {
                    o_Bubble.Content('<div id="tooltipcontent">' + $(o_node).attr('alt') + '</div>');
                    var i_nodeLeft = $(o_node).offset().left;

                    var i_nodeWidth = $(o_node).width();
                    if ($(o_node).hasClass('inline'))
                        i_nodeWidth = (i_nodeWidth - 30) / 2;

                    var i_contextLeft = i_nodeLeft - (($('body').width() - 715) / 2);
                    var i_bubbleWidth = o_Bubble.HTML().width();

                    if (i_bubbleWidth > 300)
                    {
                        o_Bubble.HTML().css('width', '300px');
                    }
                    if (i_bubbleWidth <= 200)
                    {
                        $('#tooltipcontent').css('width', '140px');
                    }

                    i_bubbleWidth = o_Bubble.HTML().width();

                    var i_bubbleHeight = o_Bubble.HTML().height();

                    if (i_bubbleWidth + i_contextLeft < 715)
                    {
                        i_computedLeft = i_nodeLeft - 48;
                        o_Bubble.Arrow().css('left', '30px');
                        i_computedLeft += i_nodeWidth + 27;
                    }
                    else if (i_bubbleWidth + i_contextLeft > 715 && i_contextLeft > 443)
                    {
                        i_computedLeft = i_nodeLeft - i_bubbleWidth + 70;
                        o_Bubble.Arrow().css('left', o_Bubble.HTML().width() - 50 + 'px');
                        i_computedLeft += i_nodeWidth - 11;
                    }
                    else
                    {
                        i_computedLeft = i_nodeLeft - i_bubbleWidth / 2 + 20;
                        o_Bubble.Arrow().css('left', o_Bubble.HTML().width() / 2 - 28 + 'px');
                        i_computedLeft += i_nodeWidth;
                    }
                    var top = $(o_node).offset().top - i_bubbleHeight;

                    var i_delay = $(o_node).hasClass('inline') ? 500 : 0;

                    $this.Page.Threads.fn_v_StartThread('showTooltipBubble', function ()
                    {
                        o_Bubble.HTML().css({ 'display': 'block', 'left': i_computedLeft + 'px', 'top': top - 4 + 'px' });
                    }, i_delay, true);
                }
                var hide = function ()
                {
                    o_Bubble.Content('');
                    o_Bubble.HTML().css({ 'display': 'none' });
                    $this.Page.Threads.fn_b_StopThread('showTooltipBubble');
                }
                this.hide = function ()
                {
                    hide();
                }
                return this;
            };

            this.fn_v_setupTooltip = function ()
            {
                if (this.tooltip == null)
                {
                    var dom_TooltipReplacement = $('<a></a>').attr('id', 'tooltip');
                    $('body').append(dom_TooltipReplacement);
                    this.Tooltip = new o_Tooltip();
                    $this.Page.fn_v_hideTooltip = this.Tooltip.hide;
                }
            }

            // #endregion

            // Init Session Timer
            // #region
            this.fn_v_initSessionTimer = function ()
            {
                if ($this.Page.bIsUserLoggedIn && ($this.Page.b_IsRememberMe || $this.Page.b_IsUserLoggedInByEncryptedCookie))
                {
                    $this.Page.Threads.fn_v_AllowThreadReferencesStore(false);
                    $this.Page.Threads.fn_v_StartThread('KeepSessionAlive', function ()
                    {
                        if ($this.Page.bIsUserLoggedIn)
                        {
                            $.get(c_j_BackendPages.c_s_Refresher + "?randomkey=" + Math.random());
                            $this.Page.fn_v_initSessionTimer();
                        }
                    }, ($this.Page.i_SessionTimeout - 2) * 60 * 1000, true)
                    $this.Page.Threads.fn_v_AllowThreadReferencesStore(true);
                }
            }
            // #endregion

            // Set Background Image
            // #region
            this.setBackgroundImage = function (s_imageUrl)
            {
                var flashBg = $('#flashBackgroundImage');
                if (flashBg.length > 0)
                    flashBg.replaceWith('<div id="FlashBg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0">');
                if ($this.Browser.bHasRequiredFlashVersion() && $this.Browser.eSessionType != SessionType.Safari && $this.Browser.eSessionType != SessionType.Chrome)
                {
                    var flashvars = { imageURL: s_imageUrl };
                    var params = { menu: "false", wmode: "transparent" };
                    var attributes = { id: "flashBackgroundImage", name: "flashBackgroundImage", wmode: "transparent", allowScriptAccess: "always" };

                    if ($this.Page.sJsCssLinksVersion)
                        swfobject.embedSWF("/Common/Flashes/imageLoader2.swf?" + $this.Page.sJsCssLinksVersion, "FlashBg", "100%", "100%", "9.0.0", "/Common/Flashes/expressInstall.swf?" + $this.Page.sJsCssLinksVersion, flashvars, params, attributes);
                    else
                        swfobject.embedSWF("/Common/Flashes/imageLoader2.swf", "FlashBg", "100%", "100%", "9.0.0", "/Common/Flashes/expressInstall.swf", flashvars, params, attributes);
                }
                else
                {
                    var dom_bgImage = new Image();
                    var dt_cachePreventer = new Date().getTime();
                    dom_bgImage.src = s_imageUrl + '?' + dt_cachePreventer;
                    dom_bgImage.id = 'backgroundimage';
                    $('#ImgBg').html('').append(dom_bgImage);
                    dom_bgImage.onload = function ()
                    {
                        $this.Page.o_backgroundImage = $('#backgroundimage');
                        $this.Page.i_bgImageWidth = $this.Page.o_backgroundImage.width();
                        $this.Page.i_bgImageHeight = $this.Page.o_backgroundImage.height();
                        $this.Page.d_bgImageRatio = $this.Page.i_bgImageWidth / $this.Page.i_bgImageHeight;
                        $this.Page.fitBackgroundImage();
                    }
                    $('#FlashBg').css('display', 'none');
                }
                if (s_imageUrl != this.s_FactoryBg)
                    this.s_UserBg = s_imageUrl;
            }

            this.setFactoryBg = function (s_imageUrl)
            {
                this.s_FactoryBg = s_imageUrl;
            }

            // #endregion

            // Fit Background Image
            // #region
            this.fitBackgroundImage = function ()
            {
                if (!$this.Page.o_backgroundImage)
                    return false;
                var o_bgImg = $this.Page.o_backgroundImage;
                var d_bgImageRatio = $this.Page.d_bgImageRatio;
                var i_windowWidth = $(window).width();
                var i_windowHeight = $(window).height();
                var i_imageWidth = $this.Page.i_bgImageWidth;
                var i_imageHeight = $this.Page.i_bgImageHeight;
                var i_scaledWidth = 0;
                var i_scaledHeight = 0;

                if (d_bgImageRatio <= (i_windowWidth / i_windowHeight))
                {
                    i_scaledWidth = i_windowWidth;
                    i_scaledHeight = i_scaledWidth / d_bgImageRatio;
                }
                else
                {
                    i_scaledHeight = i_windowHeight;
                    i_scaledWidth = i_scaledHeight * d_bgImageRatio;
                }

                o_bgImg.css('width', i_scaledWidth + 'px');
                o_bgImg.css('height', i_scaledHeight + 'px');

                if (i_scaledWidth > i_windowWidth);
                o_bgImg.css('left', -1 * (i_scaledWidth - i_windowWidth) / 2 + 'px');
                if (i_scaledHeight > i_windowHeight)
                    o_bgImg.css('top', -1 * (i_scaledHeight - i_windowHeight) / 2 + 'px');
            };

            // Fit Thumbnail Image
            // #region
            this.fitThumbImage = function (dom_Image)
            {
                if (dom_Image.width() == 0)
                    return;
                if (dom_Image.width() >= 115)
                {
                    dom_Image.css({ 'position': 'relative', 'left': -1 * (dom_Image.width() - 115) / 2 + 'px' });
                }
                else
                {
                    var d_ratio = dom_Image.width() / dom_Image.height();
                    dom_Image.css({ 'position': 'relative', 'width': '115px', 'height': 115 / d_ratio + 'px' });
                }
            }
            // #endregion

            $(document).ready(function ()
            {
                $(window).bind("resize", function () { $this.Page.fitBackgroundImage(); });
            });
        };
        // #endregion

        // CustomControls
        // #region
        this.CustomControls = new function ()
        {
            $(document).keydown(function (o_Event)
            {
                if (o_Event.shiftKey &&
                    o_Event.keyCode == 9)
                    b_IsShiftTab = true;
                else
                    b_IsShiftTab = false;
            });

            this.fn_v_ClearControls = function ()
            {
                a_Callbacks = {};
                aTextBoxes = {};
                aBubbles = {};
                aComboTextBoxes = {};
                aIconButtons = {};
                aButtons = {};
                aCheckBoxes = {};
                aValidators = {};
                aRadios = {};
                o_LastComboTextBox = null;
                o_LastBubble = null;
                i_MinTabIndex = 9999999;
                b_IsShiftTab = false;
            };

            // Helper functions
            // #region
            // Calbacks
            // #region
            var a_Callbacks = {};
            var a_PermenentCallbacks = {};
            var c_a_ControlType = { 'Button': 'button', 'Radio': 'radio', 'CheckBox': 'checkbox', 'TextBox': 'textbox', 'Bubble': 'bubble', 'IconButton': 'iconbutton', 'ComboTextBox': 'combotextbox' };
            var fn_v_AddCallback = function (c_a_ControlType, s_ControlId, s_fnCallback, s_cbName, b_KeepInMemory)
            {
                if (!b_KeepInMemory)
                {
                    if (!a_Callbacks[c_a_ControlType])
                        a_Callbacks[c_a_ControlType] = {};

                    if (!a_Callbacks[c_a_ControlType][s_ControlId])
                        a_Callbacks[c_a_ControlType][s_ControlId] = {};

                    a_Callbacks[c_a_ControlType][s_ControlId][s_cbName] = s_fnCallback;
                }
                else
                {
                    if (!a_PermenentCallbacks[c_a_ControlType])
                        a_PermenentCallbacks[c_a_ControlType] = {};

                    if (!a_PermenentCallbacks[c_a_ControlType][s_ControlId])
                        a_PermenentCallbacks[c_a_ControlType][s_ControlId] = {};

                    a_PermenentCallbacks[c_a_ControlType][s_ControlId][s_cbName] = s_fnCallback;
                }
            };

            var fn_v_RemoveCallback = function (c_a_ControlType, s_ControlId, s_cbName, b_KeepInMemory)
            {
                if (!b_KeepInMemory)
                    delete a_Callbacks[c_a_ControlType][s_ControlId][s_cbName];
                else
                    delete a_PermenentCallbacks[c_a_ControlType][s_ControlId][s_cbName];
            };

            var fn_v_callback = function (c_a_ControlType, s_ControlId, o_Event, o_Element)
            {
                if (a_Callbacks[c_a_ControlType])
                {
                    if (a_Callbacks[c_a_ControlType][s_ControlId])
                    {
                        for (var i in a_Callbacks[c_a_ControlType][s_ControlId])
                        {
                            var s_cbType = typeof (a_Callbacks[c_a_ControlType][s_ControlId][i]);
                            if (s_cbType == 'string')
                            {
                                eval(a_Callbacks[c_a_ControlType][s_ControlId][i] + '()');
                            }
                            else if (s_cbType == 'function')
                            {
                                a_Callbacks[c_a_ControlType][s_ControlId][i](o_Event, o_Element);
                            }
                        }
                    }
                }

                if (a_PermenentCallbacks[c_a_ControlType])
                {
                    if (a_PermenentCallbacks[c_a_ControlType][s_ControlId])
                    {
                        for (var i in a_PermenentCallbacks[c_a_ControlType][s_ControlId])
                        {
                            var s_cbType = typeof (a_PermenentCallbacks[c_a_ControlType][s_ControlId][i]);
                            if (s_cbType == 'string')
                            {
                                eval(a_PermenentCallbacks[c_a_ControlType][s_ControlId][i] + '()');
                            }
                            if (s_cbType == 'function')
                            {
                                a_PermenentCallbacks[c_a_ControlType][s_ControlId][i](o_Event, o_Element);
                            }
                        }
                    }
                }

                return false;
            };
            // #endregion

            var roundTable = function (sCssType, sCssColor)
            {
                return $("<table cellspacing='0' cellpadding='0'></table>").
                        addClass(sCssType).
                        addClass(sCssColor).
                append(
                            $("<tbody></tbody").
                            append(
                                $("<tr></tr>").
                                addClass(sCssColor + "_top").
                                append(
                                    $("<td></td>").
                                    addClass("sprt " + sCssColor + "_left")
                                ).
                                append(
                                    $("<td></td>").
                                    addClass("sprt_x " + sCssColor + "_middle")
                                ).
                                append(
                                    $("<td></td>").
                                    addClass("sprt " + sCssColor + "_right")
                                )
                            ).
                            append(
                                $("<tr></tr>").
                                addClass(sCssColor + "_middle").
                                append(
                                    $("<td></td>").
                                    addClass("sprt_y " + sCssColor + "_left")
                                ).
                                append(
                                    $("<td></td>").
                                    addClass(sCssColor + "_middle")
                                ).
                                append(
                                    $("<td></td>").
                                    addClass("sprt_y " + sCssColor + "_right")
                                )
                            ).
                            append(
                                $("<tr></tr>").
                                addClass(sCssColor + "_bottom").
                                append(
                                    $("<td></td>").
                                    addClass("sprt " + sCssColor + "_left")
                                ).
                                append(
                                    $("<td></td>").
                                    addClass("sprt_x " + sCssColor + "_middle")
                                ).
                                append(
                                    $("<td></td>").
                                    addClass("sprt " + sCssColor + "_right")
                                )
                            )
                        );
            };
            // #endregion

            // Constructor
            // #region
            var aTextBoxes = {};
            var aBubbles = {};
            var a_PermanentBubbles = {};
            var aComboTextBoxes = {};
            var aIconButtons = {};
            var aButtons = {};
            var aCheckBoxes = {};
            var aValidators = {};
            var aRadios = {};
            var o_LastComboTextBox = null;
            this.o_LastComboTextBox = function ()
            {
                return o_LastComboTextBox;
            }
            var o_LastBubble = null;
            this.o_LastBubble = function ()
            {
                return o_LastBubble;
            }
            var i_MinTabIndex = 9999999;
            var b_IsShiftTab = false;
            // #endregion

            // Activators
            // #region
            var Activators = new function ()
            {
                // Constructor
                // #region
                var sWatermarkClassName = "watermark";
                var sOnFocusClassName = "focus";
                // #endregion

                // TextBox Activator
                // #region
                this.ActivateTextBox = function (oControl)
                {
                    if (typeof (oControl.HTML().dom_WaterField) != 'undefined')
                    {
                        var fn_v_PswdHideWatermark = function ()
                        {
                            oControl.HTML().css('background', '#fff');
                            oControl.HTML().unbind('keydown', fn_v_PswdHideWatermark);
                            oControl.HTML().unbind('mousedown', fn_v_PswdHideWatermark);
                        }

                        var fn_v_OnFocus = function ()
                        {
                            oControl.HTML().addClass('focus');
                            if (oControl.b_FirstSelected)
                            {
                                oControl.HTML().bind('keydown', fn_v_PswdHideWatermark);
                                oControl.HTML().bind('mousedown', fn_v_PswdHideWatermark);
                            }
                            else
                            {
                                oControl.HTML().css('background', '#fff');
                            }

                            $this.Page.FocusedElement = oControl;
                        }

                        var fn_v_OnBlur = function ()
                        {
                            if (oControl.HTML().val() === '')
                            {
                                oControl.HTML().css('background', 'url(/Common/Images/blank.gif)');
                                oControl.HTML().removeClass('focus');
                            }
                            else
                            {
                                oControl.HTML().removeClass('focus');
                            }
                            oControl.b_FirstSelected = false;
                        }
                        oControl.HTML().focus(fn_v_OnFocus);
                        oControl.HTML().blur(fn_v_OnBlur);
                    }

                    else
                    {
                        var fn_v_HideWatermark = function ()
                        {
                            if (oControl.HTML().hasClass(sWatermarkClassName))
                            {
                                oControl.HTML().removeClass(sWatermarkClassName);
                                oControl.HTML().val("");
                            }
                            oControl.HTML().unbind('keydown', fn_v_HideWatermark);
                            oControl.HTML().unbind('mousedown', fn_v_HideWatermark);
                        }

                        var oOnFocus = function (o_Event)
                        {
                            oControl.HTML().addClass(sOnFocusClassName);
                            if (oControl.b_FirstSelected)
                            {
                                if (this.setSelectionRange) this.setSelectionRange(0, 0);
                                oControl.HTML().bind('keydown', fn_v_HideWatermark);
                                oControl.HTML().bind('mousedown', fn_v_HideWatermark);
                            }
                            else
                            {
                                if (oControl.HTML().hasClass(sWatermarkClassName))
                                {
                                    oControl.HTML().removeClass(sWatermarkClassName);
                                    oControl.HTML().val("");
                                }
                            }

                            $this.Page.FocusedElement = oControl;
                        };

                        var oOnBlur = function ()
                        {
                            oControl.HTML().removeClass(sOnFocusClassName);
                            if (oControl.HTML().val() == "" && oControl.sWatermark != "")
                            {
                                oControl.HTML().addClass(sWatermarkClassName);
                                oControl.HTML().val(oControl.sWatermark);
                            }
                            oControl.b_FirstSelected = false;
                        };

                        if (oControl.bIsTextArea)
                        {
                            oControl.HTML().keydown(function (o_Event)
                            {
                                if (o_Event.keyCode == 13)
                                    o_Event.stopPropagation();
                            });
                        }

                        oControl.HTML().focus(oOnFocus).blur(oOnBlur);
                    }

                };
                // #endregion   

                // CheckBox Activator
                // #region
                this.ActivateCheckBox = function (oControl)
                {
                    var oClick = function ()
                    {
                        oControl.Checked(!oControl.Checked());
                    };

                    oControl.HTML().click(oClick);
                };
                // #endregion
            };
            // #endregion

            // Bubble
            // #region
            this.Bubble = function (options)
            {
                ///<summary>                
                /// Bubble                                
                ///</summary>                
                ///<param name="options">
                /// color - the color of the bubble - default red, possible values red, white &#13;
                /// id - id of the bubble &#13;
                /// arrow - position of the arrow - default left, possible values left, right, top, bottom, none &#13;
                /// style - bubbles inline style &#13;
                /// s_css - CSS class name &#13;
                /// b_hideOnDocumentClick - Hide bubble on document click - default false &#13;
                /// b_WrapControlIntoDiv - Wrap elements into a container div - default false &#13;
                ///</param>                
                var default_args = {
                    'color': 'red',
                    'id': undefined,
                    'arrow': 'left',
                    'style': undefined,
                    's_css': undefined,
                    'b_hideOnDocumentClick': false,
                    'b_WrapControlIntoDiv': false
                };

                if (!options)
                {
                    options = default_args;
                }

                for (var index in default_args)
                {
                    if (typeof options[index] == "undefined")
                        options[index] = default_args[index];
                }

                if (options.color == "white")
                    options.color = "white_bubble";

                var oHTML = $("<div></div>").
                                addClass("bubble").
                                addClass(options.color).
                                append(roundTable("round", options.color));
                if (options.style)
                    oHTML.attr("style", options.style);
                if (options.s_css)
                    oHTML.addClass(options.s_css);

                var oArrow = null;
                if (options.arrow != 'none')
                {
                    oArrow = $("<div class='joci_rel'><div class='sprt joci_abs'></div></div>")
                              .addClass(options.arrow);
                    if (options.arrow == "bottom")
                        oHTML.append(oArrow);
                    else
                        oHTML.prepend(oArrow);
                }
                oHTML.attr("id", options.id);
                var oContentHTML = oHTML.find("tr." + options.color + "_middle td." + options.color + "_middle:first");

                var dom_Replacement = $("#" + options.id);
                var dom_ParentContainer = null;
                if (options.b_WrapControlIntoDiv)
                {
                    // Create Control Container
                    dom_ParentContainer = $("<div></div>")
                                           .addClass("joci_rel")
                                           .addClass("bubble_container");
                    dom_Replacement.wrap(dom_ParentContainer);
                }
                var oHtmlToBeReplaced = dom_Replacement.replaceWith(oHTML);

                aBubbles[options.id] = { "html": oHTML, "contentHtml": oContentHTML, "arrow": oArrow, "a_Options": options };

                return new $this.CustomControls.Bubble.fn.init(oHTML, oContentHTML, oArrow, options);
            };

            this.Bubble.get = function (sId)
            {
                var arrayItem = aBubbles[sId];
                if (!arrayItem)
                    arrayItem = { "html": null, "contentHtml": null, "arrow": null, "dom_ParentContainer": null, "a_Options": {} };

                return new $this.CustomControls.Bubble.fn.init(arrayItem.html, arrayItem.contentHtml, arrayItem.arrow, arrayItem.a_Options);
            };

            this.Bubble.fn = this.Bubble.prototype = {
                init: function (html, contentHtml, arrow, a_Options)
                {
                    this.b_Exists = true;
                    if (!html)
                        this.b_Exists = false;

                    var oHTML = html;
                    var oContentHTML = contentHtml;
                    var oArrow = arrow;
                    var bNeedsArrowPositioning = oArrow ? oArrow.hasClass("right") : false;
                    var bIsVisible = false;
                    var b_HideOnDocumentClick = a_Options.b_hideOnDocumentClick;
                    var fn_v_HideCallBackFunct = false;

                    this.HideOnDocumentClick = function (b_value)
                    {
                        if (b_value == undefined)
                            return b_HideOnDocumentClick;
                        else
                            b_HideOnDocumentClick = b_value;
                    };

                    this.Content = function (oContent)
                    {
                        ///<summary>
                        /// Content
                        ///</summary>
                        if (oContent)
                        {
                            oContentHTML.html(oContent);
                            if (oArrow && oArrow.hasClass("right"))
                                bNeedsArrowPositioning = true;
                            if (bIsVisible)
                                this.Show();
                        }
                        else
                        {
                            return oContentHTML.html();
                        }
                    };

                    this.HTML = function ()
                    {
                        return oHTML;
                    };

                    this.Arrow = function ()
                    {
                        return oArrow;
                    };
                    this.Show = function (x, y)
                    {
                        // Hide last opened combotextbox panel
                        if (o_LastComboTextBox != null)
                        {
                            o_LastComboTextBox.fn_v_ShowOrHidePanel(false);
                            o_LastComboTextBox.HTML().blur();
                        }
                        if (o_LastBubble != null)
                        {
                            o_LastBubble.Hide();
                            o_LastBubble = null;
                        }
                        if (a_Options.id != 'modalDialog')
                            o_LastBubble = this;

                        oHTML.show();

                        bIsVisible = true;

                        if (x != null && y != null && $this.Browser.eSessionType != SessionType.IE6)
                        {
                            if (a_Options.b_WrapControlIntoDiv)
                            {
                                oHTML.parent().css("top", y);
                                oHTML.parent().css("left", x);
                            }
                            else
                            {
                                oHTML.css("top", y);
                                oHTML.css("left", x);
                            }
                        }
                        if ($this.Browser.eSessionType == SessionType.IE6)
                        {
                            $('.ie6alerts:first').html(this.Content().replace(/\<BR\>/, ' '));
                            oHTML.remove();
                        }

                        if (bNeedsArrowPositioning)
                        {
                            oArrow.css("left", oContentHTML.parents("table").width() - 13);
                        }
                        if (a_Options.b_hideOnDocumentClick)
                        {
                            $(document).one("click", this, function (o_Event)
                            {
                                if (o_Event.data.IsVisible())
                                    o_Event.data.Hide();
                                o_LastBubble = null;
                            });
                        }
                    };

                    this.fn_v_HideCallBack = function (fn_v_HideCallBackFunction)
                    {
                        ///<summary>
                        /// Content
                        ///</summary>
                        if (fn_v_HideCallBackFunction)
                            fn_v_HideCallBackFunct = fn_v_HideCallBackFunction;
                        else
                            return fn_v_HideCallBackFunct;
                    };

                    this.Hide = function ()
                    {
                        if (typeof fn_v_HideCallBackFunct == 'function')
                            fn_v_HideCallBackFunct();
                        oHTML.hide();
                        if (a_Options.b_modalDialog)
                            oHTMLDialogBackground.hide();
                        bIsVisible = false;
                        if ($this.Browser.eSessionType == SessionType.IE6)
                            $('.ie6alerts:first').html('');
                    };
                    this.IsVisible = function ()
                    {
                        return bIsVisible;
                    };
                }
            }

            // #endregion

            // TextBox Control
            // #region
            /// <field name="TextBox">Creates a textbox</field>
            /// <value name="TextBox">Common</value>
            this.TextBox = function (sId, sWatermark, sCSS, sStyle, sValue, iTabIndex, iMaxLength, bIsReadOnly, bIsTextArea, bIsPassword)
            {
                // Constructor
                // #region
                var oHTML = null;
                var b_Disabled = bIsReadOnly;
                if (bIsTextArea)
                {
                    this.bIsTextArea = true;
                    oHTML = $("<textarea />");
                }
                else
                {
                    this.bIsTextArea = false;
                    oHTML = $("<input />");
                    if (bIsPassword)
                        oHTML.attr("type", "password");
                    else
                        oHTML.attr("type", "text");
                }
                oHTML.addClass("textbox");
                if (sId)
                    oHTML.attr("id", sId);
                if (sCSS)
                    oHTML.addClass(sCSS);
                if (sValue)
                    oHTML.attr("value", sValue);
                if (sStyle)
                    oHTML.attr("style", sStyle);
                if (sValue)
                    oHTML.attr("value", sValue);
                if (iTabIndex)
                    oHTML.attr("tabindex", iTabIndex);
                if (iMaxLength)
                    oHTML.attr("maxlength", iMaxLength);
                if (bIsReadOnly)
                    oHTML.attr("readonly", true);

                this.sWatermark = (!sWatermark) ? "" : sWatermark;
                if (!bIsPassword)
                {
                    $("#" + sId).replaceWith(oHTML);
                }
                else
                {

                    var dom_BoxClone = $('<input/>')
                                            .attr('type', 'text')
                                            .addClass('textbox')
                                            .addClass('watermark')
                                            .addClass(sCSS)
                                            .attr('style', sStyle)
                                            .attr('readonly', true)
											.css({ 'position': 'absolute', 'top': '0px', 'left': '0', 'border': 'none' })
                                            .val(this.sWatermark);
                    dom_container = $('<span></span>')
											.css({ 'position': 'relative', 'display': 'inline-block' })
                                            .append(dom_BoxClone)
                                            .append(oHTML);

                    oHTML.css({ 'position': 'relative' });
                    oHTML.dom_WaterField = dom_BoxClone;
                    dom_BoxClone.dom_SendField = oHTML;
                    $("#" + sId).replaceWith(dom_container);
                }


                this.HTML = function () { return oHTML; }
                aTextBoxes[oHTML.attr("id")] = this;
                // #endregion                

                this.Disable = function (b_Value)
                {
                    if (b_Value == undefined)
                        return b_Disabled;

                    if (b_Disabled === b_Value)
                        return;

                    if (b_Value)
                        oHTML.attr("readonly", true);
                    else
                        oHTML.removeAttr("readonly");

                    b_Disabled = b_Value;
                };

                this.Value = function (s_Value)
                {
                    if (s_Value == undefined)
                    {
                        if (bIsPassword)
                        {
                            if (oHTML.val() == "")
                                return null;
                            else
                                return oHTML.val();
                        }
                        else
                        {
                            if (oHTML.val() != sWatermark)
                                return oHTML.val();
                            else
                                return null;
                        }
                    }
                    else
                    {
                        oHTML.val(s_Value);
                    }
                };

                Activators.ActivateTextBox(this);
                oHTML.blur();
                this.b_FirstSelected = false;
                this.fn_v_SetFirstSelected = function ()
                {
                    this.b_FirstSelected = true;
                    oHTML.focus().focus();
                }

                if ($this.Page.b_AutoFocus &&
                    iTabIndex &&
                    iTabIndex < i_MinTabIndex)
                {
                    i_MinTabIndex = iTabIndex;
                    oHTML.focus().focus();
                }

                this.SelectedText = function ()
                {
                    // IE support
                    if ($this.Browser.bIsIE)
                    {
                        if (document.selection)
                        {

                            var TextRange = document.selection.createRange();
                            if (TextRange.parentElement().id == sId)
                            {
                                return TextRange.text;
                            }
                        }

                        return null;
                    }
                    // Firefox support
                    else
                    {
                        if ((oHTML[0].selectionStart || oHTML[0].selectionStart == "0") &&
                            oHTML[0].selectionStart != oHTML[0].selectionEnd)
                        {
                            return oHTML.val().substring(oHTML[0].selectionStart, oHTML[0].selectionEnd);
                        }

                        return null;
                    }
                }
            };


            // External Methods
            // #region
            this.TextBox.get = function (sId)
            {
                return aTextBoxes[sId];
            }
            this.TextBox.getCaretPosition = function (oObject)
            {
                var CaretPos = 0; // IE Support                
                if ($this.Browser.bIsIE)
                {
                    var selection = document.selection
                    oObject.focus();
                    var Sel = selection.createRange();
                    Sel.moveStart('character', -oObject.value.length);
                    CaretPos = Sel.text.length;
                }
                // Firefox support
                else if (oObject.selectionStart || oObject.selectionStart == '0')
                {
                    CaretPos = oObject.selectionStart;
                }
                return (CaretPos);
            }
            this.TextBox.setCaretPosition = function (oObject, iPosition)
            {
                // Firefox support
                if (oObject.setSelectionRange)
                {
                    oObject.focus();
                    oObject.setSelectionRange(iPosition, iPosition);
                }
                // IE support
                else if (oObject.createTextRange)
                {
                    var range = oObject.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', iPosition);
                    range.moveStart('character', iPosition);
                    try
                    {
                        range.select();
                    } catch (e)
                    {

                    }
                }
            }
            // #endregion

            // #endregion

            // ComboTextBox Control
            // #region
            this.ComboTextBox = function ()
            {
                // Properties
                // #region

                var _this = this;
                var i_DefaultRowHeight = 20;
                var s_CurrentTheme = "";
                var b_IsVisible = true;
                var s_SelectedValue = '';
                var b_ComboIsOpen = false;
                var i_ArrayLength = 0;
                var b_CommesFromBeforeArrowClick = false;
                var b_DisableSecondClick = false;
                var b_CommesFromKeyboard = false;
                var dom_CurrentTr = null;
                this.iPanelOffsetLeft = 0;
                this.iPanelOffsetTop = 0;
                this.EnterByKeyBoard = false;
                // Properties for TextBox Component
                this.sId = null;
                this.sWatermark = null;
                this.iWidth = null;
                this.sCSS = null;
                this.sStyle = null;
                this.sValue = null;
                this.sHiddenValue = null;
                this.iTabIndex = null;
                this.iMaxLength = null;
                this.bIsReadOnly = null;
                this.iKeyNaviPosition = false;

                // Properties for ArrowButton Component
                this.sId_Arrow = null;
                this.sId_p_Arrow = null;
                this.sCSS_Arrow = null;
                this.sCSS_p_Arrow = null;

                // Properties for Panel Component
                this.sId_Panel = null;
                this.sId_p_Panel = null;
                this.sCSS_Panel = null;
                this.sCSS_p_Panel = null;

                // Properties for list Theme
                this.iWidth_Panel = null;
                this.iRows_Panel = null;
                this.aContentItems = null;
                this.onSelected = null;
                this.onAfterSelected = null;
                this.bAutoSelect = null;
                this.bDeleteColumn = null;
                this.onItemDelete = null;

                // Other properties for Control 
                this.onBeforeArrowClick = null;
                this.bCanAlignCenter = null;
                this.bDisableBlurApply = null;
                this.bDisableArrowHover = null;
                this.bNoAutoSelectOnArrowClick = null;
                this.iPanelTopPosOffset = null;
                this.bDisableReadOnlyDiv = null;
                this.bDisableAutoLastControlHide = null;
                this.bDisableAutoItemSelect = null;
                this.bDisableAutoLastControlHide2 = null;

                this.iSelectedKey = null;
                this.iSelectedValue = null;
                // #endregion

                // fn_v_ApplyChanges
                // #region
                this.fn_v_ApplyChanges = function (i_SelectedKey, s_SelectedText, o_Event, o_ComboTextBox)
                {
                    s_SelectedValue = s_SelectedText;
                    var bAllowChanges = true;
                    if (i_SelectedKey == -1)
                        bAllowChanges = (s_SelectedText != (_this.sValue ? _this.sValue : ""));
                    _this.iSelectedKey = i_SelectedKey;
                    _this.sSelectedText = s_SelectedText;
                    if (_this.onSelected && bAllowChanges)
                        _this.onSelected(_this.sSelectedText, _this.iSelectedKey);
                    fn_v_callback(c_a_ControlType.ComboTextBox, _this.sId, o_Event, o_ComboTextBox);
                }
                // #endregion

                // fn_v_FocusOrBlur
                // #region
                this.fn_v_FocusOrBlur = function (o_Control, b_Focus)
                {
                    if (b_Focus)
                    {
                        o_Control.HTML().addClass("focus");
                        if (_this.bDisableArrowHover == null || !_this.bDisableArrowHover)
                        {
                            o_Control.HTMLButton().addClass("focus");
                            o_Control.HTMLButton_p().addClass("focus");
                        }
                        o_Control.HTML().bind('keydown', function (o_event)
                        {
                            if (o_event.keyCode == 40 && !b_ComboIsOpen)
                            {
                                o_Control.HTMLButton().trigger('click');
                                if (!_this.onBeforeArrowClick)
                                    _this.fn_v_InitKeyNaviPosition(true);
                                _this.fn_v_OnControlKeyDown(o_event);
                                $this.Page.b_LockValidationForComboSelect = true;
                                return false;
                            }
                        });
                    }
                    else
                    {
                        o_Control.HTML().removeClass("focus");
                        o_Control.HTMLButton().removeClass("focus");
                        o_Control.HTMLButton_p().removeClass("focus");
                    }
                }
                // #endregion

                // fn_v_FitPanel
                // #region
                this.fn_v_FitPanel = function (b_FitWith, b_FitHeight, iWidthOffset, iHeightOffset)
                {
                    if (b_FitWith)
                    {
                        var i_CalculatedWidth = _this.HTMLPanel().children().width() + iWidthOffset;
                        var i_PanelWidth = _this.HTMLPanel().width();
                        if (i_CalculatedWidth < i_PanelWidth)
                            i_CalculatedWidth = i_PanelWidth;
                        _this.HTMLPanel().css("width", i_CalculatedWidth + "px");
                        // if (s_CurrentTheme == "list")
                        //{
                        // TODO
                        //}
                    }
                    if (b_FitHeight)
                        _this.HTMLPanel().css("height", _this.HTMLPanel().children().height() + iHeightOffset + "px");
                }
                // #endregion

                // fn_v_SimulateArrowClick
                // #region
                this.fn_v_SimulateArrowClick = function (b_CommesFromKeyboard2)
                {
                    b_CommesFromKeyboard = b_CommesFromKeyboard2;
                    this.HTMLButton().click();
                }
                // #endregion

                // fn_v_ShowOrHidePanel
                // #region
                this.fn_v_ShowOrHidePanel = function (b_Show)
                {
                    b_ComboIsOpen = b_Show;
                    if (b_Show)
                    {
                        this.HTMLPanel_p().show();
                        if ($this.Browser.ePlatformType == PaltformType.MAC && $this.Browser.eSessionType == SessionType.Firefox)
                        {
                            $(document).unbind('keyup', _this.fn_v_OnControlKeyDown);
                            $(document).keyup(_this.fn_v_OnControlKeyDown);
                        }
                        else
                        {
                            $(document).unbind('keydown', _this.fn_v_OnControlKeyDown);
                            $(document).keydown(_this.fn_v_OnControlKeyDown);
                        }
                    }
                    else
                    {
                        this.HTMLPanel_p().hide();
                        if ($this.Browser.ePlatformType == PaltformType.MAC && $this.Browser.eSessionType == SessionType.Firefox)
                            $(document).unbind('keyup', _this.fn_v_OnControlKeyDown);
                        else
                            $(document).unbind('keydown', _this.fn_v_OnControlKeyDown);
                    }
                }
                // #endregion

                // fn_v_ShowOrHideArrow
                // #region
                this.fn_v_ShowOrHideArrow = function (b_Show)
                {
                    if (b_Show)
                    {
                        if (!this.HTMLButton_p().isVisible())
                        {
                            this.HTMLButton_p().show();
                            if (this.iWidth)
                                this.HTML().css("width", this.iWidth + "px");
                        }
                    }
                    else
                    {
                        if (this.HTMLButton_p().isVisible())
                        {
                            this.HTMLButton_p().hide();
                            if (this.iWidth)
                            {
                                var i_NewWidth = this.iWidth + 21;
                                if (!$this.Browser.bIsIE)
                                    i_NewWidth++;
                                this.HTML().css("width", i_NewWidth + "px");
                            }
                        }
                    }
                }
                // #endregion

                // fn_v_Show
                // #region
                this.fn_v_Show = function ()
                {
                    if (!b_IsVisible)
                    {
                        // TextBox
                        this.HTML().show();
                        // ArrowBox
                        this.HTMLButton().show();
                        // ArrowBox Container
                        this.HTMLButton_p().show();
                        // Panel
                        this.HTMLPanel().show();
                        // Panel Container
                        this.fn_v_ShowOrHidePanel(true);

                        if (this.HTMLReadOnlyDiv != undefined)
                            this.HTMLReadOnlyDiv().show();
                        if (this.HTMLReadOnlyDiv_p != undefined)
                            this.HTMLReadOnlyDiv_p().show();

                        b_IsVisible = true;
                    }
                }
                // #endregion

                // fn_v_Hide
                // #region
                this.fn_v_Hide = function ()
                {
                    if (b_IsVisible)
                    {
                        // TextBox
                        this.HTML().hide()
                        // ArrowBox
                        this.HTMLButton().hide();
                        // ArrowBox Container
                        this.HTMLButton_p().hide();
                        // Panel
                        this.HTMLPanel().hide();
                        // Panel Container
                        this.fn_v_ShowOrHidePanel(false);

                        if (this.HTMLReadOnlyDiv != undefined)
                            this.HTMLReadOnlyDiv().hide();
                        if (this.HTMLReadOnlyDiv_p != undefined)
                            this.HTMLReadOnlyDiv_p().hide();

                        b_IsVisible = false;
                    }
                }
                // #endregion

                // fn_b_IsVisible
                // #region
                this.fn_b_IsVisible = function ()
                {
                    return b_IsVisible;
                }
                // #endregion

                // fn_v_RemoveItem
                // #region
                this.fn_v_RemoveItem = function (s_ItemKey)
                {
                    this.HTMLPanel().find("#combotextbox_tr_" + this.sId + "_" + s_ItemKey).remove();
                }
                // #endregion

                // fn_v_InitKeyNaviPosition
                // #region
                this.fn_v_InitKeyNaviPosition = function (b_ReInit)
                {
                    if (!_this.iKeyNaviPosition || b_ReInit)
                    {
                        var i_TopMin = parseInt(Math.abs(_this.HTMLTable().parent()[0].offsetTop) / 20) - 1;
                        if (i_TopMin < 0)
                            i_TopMin = 0;
                        _this.iKeyNaviPosition = _this.HTMLTable().find('tr:eq(' + i_TopMin + ')');
                        _this.iKeyNaviPosition.addClass('hover');
                    }
                }
                // #endregion

                // fn_v_OnControlKeyDown
                // #region
                this.fn_v_OnControlKeyDown = function (o_Event)
                {
                    if (s_CurrentTheme != "list")
                        return true;
                    if (o_Event.keyCode == 9)
                        return false;
                    if ((o_Event.keyCode < 37 || o_Event.keyCode > 40) && o_Event.keyCode != 13 && o_Event.keyCode != 27)
                    {
                        if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                        {
                            if (_this.bDisableAutoItemSelect == null || !_this.bDisableAutoItemSelect)
                            {
                                var i_ScrollAmount = 0;
                                var s_ExpectedKey = '';
                                var s_PressedKey = String.fromCharCode(o_Event.keyCode).toLowerCase();
                                if (o_Event.keyCode >= 96 && o_Event.keyCode <= 105)
                                    s_PressedKey = o_Event.keyCode - 96;
                                for (var s_Key in _this.aContentItems)
                                {
                                    i_ScrollAmount += i_DefaultRowHeight;
                                    if (_this.aContentItems[s_Key].substring(0, 1).toLowerCase() == s_PressedKey)
                                    {
                                        s_ExpectedKey = s_Key;
                                        break;
                                    }
                                }
                                if (i_ScrollAmount != null && s_ExpectedKey != '')
                                {
                                    if (i_ScrollAmount - i_DefaultRowHeight >= 2 * i_DefaultRowHeight)
                                        _this.HTMLTable_p()[0].scrollTo(i_ScrollAmount - 3 * i_DefaultRowHeight);
                                    else if (i_ScrollAmount - i_DefaultRowHeight >= i_DefaultRowHeight)
                                        _this.HTMLTable_p()[0].scrollTo(i_ScrollAmount - 2 * i_DefaultRowHeight);
                                    else
                                        _this.HTMLTable_p()[0].scrollTo(i_ScrollAmount - i_DefaultRowHeight);
                                    _this.HTMLTable().children().children().removeClass('selected');
                                    var obj_Tr = $('#combotextbox_tr_' + _this.sId + '_' + s_ExpectedKey);
                                    obj_Tr.addClass('selected');
                                    _this.iKeyNaviPosition = obj_Tr;
                                }
                            }
                        }
                    }
                    else if (o_Event.keyCode == 38 || o_Event.keyCode == 40)
                    {
                        var fn_v_KeyNaviScroll = function (o_Item)
                        {
                            var dom_ScrollContainer = _this.HTMLTable().parent();
                            if (dom_ScrollContainer.parent().hasClass('jScrollPaneContainer'))
                            {
                                var dom_ScrollPane = dom_ScrollContainer.parent();
                                var i_TopMin = (Math.abs(dom_ScrollContainer[0].offsetTop));
                                var i_TopMax = (Math.abs(dom_ScrollContainer[0].offsetTop) + dom_ScrollPane.height());
                                var i_Offset = dom_ScrollContainer[0].offsetTop % 20;
                                if ((i_Offset != 0) && (o_Item[0].offsetTop < i_TopMin || o_Item[0].offsetTop >= i_TopMax))
                                    dom_ScrollContainer[0].scrollBy((20 + i_Offset));
                                if (o_Item[0].offsetTop < i_TopMin)
                                    dom_ScrollContainer[0].scrollBy(-20);
                                if (o_Item[0].offsetTop >= i_TopMax)
                                    dom_ScrollContainer[0].scrollBy(20);
                            }
                        }
                        if (!_this.onBeforeArrowClick)
                            _this.fn_v_InitKeyNaviPosition(false);
                        if (_this.iKeyNaviPosition)
                        {
                            if (o_Event.keyCode == 40)
                            {
                                _this.iKeyNaviPosition.removeClass('hover');
                                if (_this.iKeyNaviPosition.next('tr').length > 0)
                                    _this.iKeyNaviPosition = _this.iKeyNaviPosition.next('tr');
                                fn_v_KeyNaviScroll(_this.iKeyNaviPosition);
                            }
                            else if (o_Event.keyCode == 38)
                            {
                                _this.iKeyNaviPosition.removeClass('hover');
                                if (_this.iKeyNaviPosition.prev('tr').length > 0)
                                    _this.iKeyNaviPosition = _this.iKeyNaviPosition.prev('tr');
                                fn_v_KeyNaviScroll(_this.iKeyNaviPosition);
                            }
                            _this.iKeyNaviPosition.addClass('hover');
                        }
                    }
                    else if (o_Event.keyCode == 13)
                    {
                        _this.EnterByKeyBoard = true;
                        _this.iKeyNaviPosition.find('td:first').trigger('click');
                        _this.HTML().focus();
                        _this.HTML().select();
                    }
                    else if (o_Event.keyCode == 27)
                    {
                        _this.fn_v_ShowOrHidePanel(false);
                        $this.Page.b_LockValidationForComboSelect = false;
                    }
                }
                // #endregion

                // fn_v_InitControl
                // #region
                this.fn_v_InitControl = function (s_ThemeId)
                {
                    if (this.bCanAlignCenter != null && this.bCanAlignCenter && this.sId && this.iWidth)
                    {
                        // Create Control Container
                        var dom_ParentContainer = $("<div></div>")
                                                   .addClass("combotextbox_parentcontainer")
                                                   .css("width", this.iWidth + 33 + "px")
                                                   .css("margin-left", -(this.iWidth + 33) / 2 + "px");
                        $("#" + this.sId).wrap(dom_ParentContainer);
                    }
                    if (this.iWidth)
                    {
                        if (!this.sStyle)
                            this.sStyle = "";
                        this.sStyle += "; width: " + this.iWidth + "px;";
                    }

                    // Create TextBox 
                    // remember previous minTabIndex
                    var tempTabIndex = i_MinTabIndex;
                    var oTextBox = new $this.CustomControls.TextBox(this.sId, this.sWatermark, this.sCSS, this.sStyle, this.sValue, this.iTabIndex, this.iMaxLength, this.bIsReadOnly, false, false);
                    oTextBox.HTML().blur();
                    i_MinTabIndex = tempTabIndex;

                    // Inherited from TextBox
                    var dom_HTML = oTextBox.HTML().addClass("combotextbox");

                    if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                        dom_HTML.addClass("readonly");

                    // Create ArrowButton + ArrowButton Container
                    var i_ArrowButtonLeft = this.iWidth + 9;
                    if (!$this.Browser.bIsIE)
                        i_ArrowButtonLeft--;

                    var dom_ArrowButtonComponent = $("<div>&nbsp;</div>")
                                                    .addClass("joci_abs")
                                                    .addClass("sprt combotextbox_arrow")
                                                    .css("left", i_ArrowButtonLeft + "px");

                    var dom_ArrowButtonComponent_p = $("<div></div>")
                                                      .addClass("joci_rel")
                                                      .addClass("combotextbox_arrow_p");
                    if (this.sId_Arrow)
                        dom_ArrowButtonComponent.attr("id", this.sId_Arrow);
                    if (this.sId_p_Arrow)
                        dom_ArrowButtonComponent_p.attr("id", this.sId_p_Arrow);
                    if (this.sCSS_Arrow)
                        dom_ArrowButtonComponent.addClass(this.sCSS_Arrow);
                    if (this.sCSS_p_Arrow)
                        dom_ArrowButtonComponent_p.addClass(this.sCSS_p_Arrow);
                    dom_ArrowButtonComponent_p.append(dom_ArrowButtonComponent);
                    dom_HTML.after(dom_ArrowButtonComponent_p);

                    // Create Panel + Panel Container
                    var dom_PanelComponent = $("<div></div>")
                                              .addClass("joci_abs")
                                              .addClass("combotextbox_panel");

                    var dom_PanelComponent_p = $("<div></div>")
                                                .addClass("joci_rel")
                                                .addClass("combotextbox_panel_p");
                    if (this.sId_Panel)
                        dom_PanelComponent.attr("id", this.sId_Panel);
                    if (this.sId_p_Panel)
                        dom_PanelComponent_p.attr("id", this.sId_p_Panel);
                    if (this.sCSS_Panel)
                        dom_PanelComponent.addClass(this.sCSS_Panel);
                    if (this.sCSS_p_Panel)
                        dom_PanelComponent_p.addClass(this.sCSS_p_Panel);
                    dom_PanelComponent_p.append(dom_PanelComponent);

                    var dom_CombotextboxPanelContainer = $("#combotextbox_panel_container");

                    // ReadOnly Div
                    if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                    {
                        var dom_ReadOnlyDiv = $("<div>&nbsp;</div>")
                                               .addClass("joci_abs")
                                               .addClass("combotextbox_readonly");

                        var dom_ReadOnlyDiv_p = $("<div></div>")
                                               .addClass("joci_rel")
                                               .addClass("combotextbox_readonly_p");

                        dom_ReadOnlyDiv_p.append(dom_ReadOnlyDiv);
                        dom_HTML.after(dom_ReadOnlyDiv_p);
                    }

                    // TextBox
                    this.HTML = function ()
                    {
                        return dom_HTML;
                    }

                    // ArrowBox
                    this.HTMLButton = function ()
                    {
                        return dom_ArrowButtonComponent;
                    }

                    // ArrowBox Container
                    this.HTMLButton_p = function ()
                    {
                        return dom_ArrowButtonComponent_p;
                    }

                    // Panel
                    this.HTMLPanel = function ()
                    {
                        return dom_PanelComponent;
                    }

                    // Panel Container
                    this.HTMLPanel_p = function ()
                    {
                        return dom_PanelComponent_p;
                    }

                    // ReadOnly Div
                    if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                    {
                        this.HTMLReadOnlyDiv = function ()
                        {
                            return dom_ReadOnlyDiv;
                        }
                        this.HTMLReadOnlyDiv_p = function ()
                        {
                            return dom_ReadOnlyDiv_p;
                        }
                    }

                    // Store instance of this atomic control
                    if (this.sId)
                        aComboTextBoxes[this.sId] = this;

                    // TextBox onFocus
                    var fn_v_OnFocus = function ()
                    {
                        _this.fn_v_FocusOrBlur(_this, true);
                    };

                    // ReadOnlyDiv onClick
                    var fn_v_OnReadOnlyDivClick = function (o_Event)
                    {
                        if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                        {
                            _this.HTMLButton().click();
                            o_Event.stopPropagation();
                        }
                    };

                    // TextBox onBlur
                    var fn_v_OnBlur = function (o_Event)
                    {
                        _this.fn_v_FocusOrBlur(_this, false);
                        if (_this.bDisableBlurApply == null || !_this.bDisableBlurApply)
                        {
                            if (_this.bIsReadOnly == null || !_this.bIsReadOnly)
                                _this.fn_v_ApplyChanges(-1, _this.HTML().val(), o_Event, _this);
                        }
                    };

                    // TextBox onKeyUp
                    var fn_v_OnKeyUp = function (o_Event)
                    {
                        if (o_Event.keyCode == 13)
                            _this.fn_v_ApplyChanges(-1, _this.HTML().val(), o_Event, _this);
                    };

                    // Document onClick
                    var fn_v_OnDocClick = function ()
                    {
                        $(document).unbind("click", fn_v_OnDocClick);
                        _this.fn_v_ShowOrHidePanel(false);
                        o_LastComboTextBox = null;
                        _this.HTML().blur();
                        dom_CombotextboxPanelContainer.hide();
                        $this.Page.b_LockValidationForComboSelect = false;
                    };

                    // Button onClick
                    var fn_v_ButtonOnClick = function ()
                    {
                        if (b_ComboIsOpen && !b_CommesFromKeyboard && (b_CommesFromBeforeArrowClick == undefined || (b_CommesFromBeforeArrowClick != undefined && !b_CommesFromBeforeArrowClick)))
                        {
                            b_DisableSecondClick = true;
                            fn_v_OnDocClick();
                        }
                        else
                        {
                            if (o_LastComboTextBox != null)
                            {
                                _this.fn_v_FocusOrBlur(o_LastComboTextBox, false);
                                o_LastComboTextBox.fn_v_ShowOrHidePanel(false);
                                o_LastComboTextBox = null;
                            }
                            _this.fn_v_FocusOrBlur(_this, true);
                            if (_this.bNoAutoSelectOnArrowClick == null || !_this.bNoAutoSelectOnArrowClick)
                            {
                                if (_this.bIsReadOnly == null || !_this.bIsReadOnly)
                                {
                                    _this.HTML().focus();
                                    _this.HTML().select();
                                }
                            }
                            _this.fn_v_ShowOrHidePanel(true);
                            $(document).unbind("click", fn_v_OnDocClick);
                            $(document).click(fn_v_OnDocClick);

                            if (_this.bDisableAutoLastControlHide2 == null || !_this.bDisableAutoLastControlHide2)
                                o_LastComboTextBox = _this;

                            dom_CombotextboxPanelContainer.html(dom_PanelComponent_p);
                            var dom_JmMainContent = $("#jm_maincontent");

                            if (_this.iPanelOffsetLeft == 0)
                                dom_CombotextboxPanelContainer.css("left", _this.HTML().offset().left - dom_JmMainContent.offset().left + "px");
                            else
                                dom_CombotextboxPanelContainer.css("left", _this.HTML().offset().left + _this.iPanelOffsetLeft + "px");

                            if (_this.iPanelOffsetTop == 0)
                                dom_CombotextboxPanelContainer.css("top", _this.HTML().offset().top - dom_JmMainContent.offset().top + 27 + "px");
                            else
                                dom_CombotextboxPanelContainer.css("top", _this.HTML().offset().top + _this.iPanelOffsetTop + "px");

                            dom_CombotextboxPanelContainer.show();

                            if (_this.bDisableAutoLastControlHide == null || !_this.bDisableAutoLastControlHide)
                            {
                                if (o_LastBubble != null)
                                    o_LastBubble.Hide();
                            }
                        }
                    };

                    // Panel onMouseUp
                    var fn_v_PanelOnMouseUp = function ()
                    {
                        _this.fn_v_FocusOrBlur(_this, true);
                    };

                    // Generic onClick
                    var fn_v_OnGenericClick = function (o_Event)
                    {
                        o_Event.stopPropagation();
                    };

                    // Ondemand callbacks
                    this.OnSelect = function (s_fnCallback, s_cbName)
                    {
                        fn_v_AddCallback(c_a_ControlType.ComboTextBox, _this.sId, s_fnCallback, s_cbName);
                    };

                    this.RemoveOnSelect = function (s_cbName)
                    {
                        fn_v_RemoveCallback(c_a_ControlType.ComboTextBox, _this.sId, s_cbName);
                    };

                    // Bind multiple events
                    this.HTML().unbind("focus", fn_v_OnFocus)
                               .focus(fn_v_OnFocus)
                               .unbind("blur", fn_v_OnBlur)
                               .blur(fn_v_OnBlur);

                    this.HTMLButton().unbind("click", fn_v_ButtonOnClick)
                                     .click(fn_v_ButtonOnClick)
                                     .unbind("click", fn_v_OnGenericClick)
                                     .click(fn_v_OnGenericClick);

                    this.HTMLPanel_p().unbind("mouseup", fn_v_PanelOnMouseUp)
                                      .mouseup(fn_v_PanelOnMouseUp)
                                      .unbind("click", fn_v_OnGenericClick)
                                      .click(fn_v_OnGenericClick);

                    if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                    {
                        this.HTMLReadOnlyDiv().unbind("click", fn_v_OnReadOnlyDivClick)
                                              .click(fn_v_OnReadOnlyDivClick);
                    }

                    this.fn_v_ShowOrHidePanel(false);

                    if (this.bIsReadOnly == null || !this.bIsReadOnly)
                    {
                        this.HTML().unbind("keyup", fn_v_OnKeyUp)
                                   .keyup(fn_v_OnKeyUp);
                    }
                    s_CurrentTheme = s_ThemeId;

                    if (_this.bIsReadOnly != null && _this.bIsReadOnly)
                    {
                        if (_this.bDisableReadOnlyDiv != null && _this.bDisableReadOnlyDiv)
                            this.HTMLReadOnlyDiv().css("width", "0px");
                        else
                            this.HTMLReadOnlyDiv().css("width", this.iWidth + 8 + "px");
                    }

                    if ($this.Page.b_AutoFocus &&
                        _this.iTabIndex &&
                        _this.iTabIndex < i_MinTabIndex)
                    {
                        i_MinTabIndex = _this.iTabIndex;
                        _this.HTML().focus();
                    }

                    // 1st Theme: empty panel
                    if (s_ThemeId == "")
                    {
                        // TODO
                    }
                    // 2nd Theme: list
                    else if (s_ThemeId == "list")
                    {
                        if (!this.iWidth_Panel && this.iWidth)
                            this.iWidth_Panel = this.iWidth + 29;

                        if (this.iWidth_Panel && this.iRows_Panel && this.aContentItems)
                        {
                            this.HTMLPanel().css("width", (this.iWidth_Panel - ($this.Browser.bIsIE ? 0 : 1)) + "px");
                            this.HTMLPanel().css("height", (this.iRows_Panel * i_DefaultRowHeight) + "px");
                            b_CommesFromBeforeArrowClick = false;

                            s_SelectedValue = _this.HTML().val();
                            if (_this.sHiddenValue)
                                s_SelectedValue = _this.sHiddenValue;

                            // Find selected item before arrow clicked
                            for (var s_Key in this.aContentItems)
                            {
                                if (this.aContentItems[s_Key] == s_SelectedValue)
                                {
                                    this.iSelectedKey = s_Key;
                                    this.sSelectedText = s_SelectedValue;
                                    break;
                                }
                            }

                            this.HTMLButton().click(function ()
                            {
                                if (b_DisableSecondClick)
                                {
                                    b_DisableSecondClick = false;
                                    return;
                                }

                                if (_this.sHiddenValue)
                                    s_SelectedValue = _this.sHiddenValue;

                                _this.HTMLPanel().css("width", (_this.iWidth_Panel - ($this.Browser.bIsIE ? 0 : 1)) + "px");
                                // Count items
                                i_ArrayLength = 0;
                                for (var s_Key in _this.aContentItems)
                                {
                                    i_ArrayLength++;
                                }
                                if (_this.onBeforeArrowClick)
                                {
                                    if (b_CommesFromBeforeArrowClick)
                                    {
                                        b_CommesFromBeforeArrowClick = false;
                                    }
                                    else
                                    {
                                        _this.aContentItems = new Array();
                                        i_ArrayLength = 0;
                                    }
                                }

                                if (i_ArrayLength == 0)
                                {
                                    // No Items
                                    if (_this.onBeforeArrowClick)
                                    {
                                        b_CommesFromBeforeArrowClick = true;
                                        _this.onBeforeArrowClick();
                                        return;
                                    }
                                    _this.fn_v_ShowOrHideArrow(false);
                                }
                                else
                                {
                                    _this.fn_v_ShowOrHideArrow(true);
                                }

                                // Create Table Container
                                var i_TableParentWidth = (_this.iWidth_Panel - ($this.Browser.bIsIE ? 2 : 3) + (i_ArrayLength <= _this.iRows_Panel ? 2 : 0));

                                var dom_Table_p = $("<div></div>")
                                                   .css("width", i_TableParentWidth + "px")
                                                   .css("height", (_this.iRows_Panel * i_DefaultRowHeight) + "px")
                                                   .addClass("combotextbox_table_p");

                                var i_TableWidth = _this.iWidth_Panel - ($this.Browser.bIsIE ? 12 : 13);

                                if (i_ArrayLength <= _this.iRows_Panel)
                                {
                                    i_TableWidth += 20;
                                    if (_this.bDeleteColumn != null && _this.bDeleteColumn)
                                        i_TableWidth -= 8;
                                }

                                // Create Table 
                                var dom_Table = $("<table></table>")
                                                 .attr("cellpadding", "0")
                                                 .attr("cellspacing", "0")
                                                 .css("width", i_TableWidth + "px")
                                                 .addClass("combotextbox_table");

                                // Table for list theme
                                _this.HTMLTable = function ()
                                {
                                    return dom_Table;
                                }
                                _this.HTMLTable_p = function ()
                                {
                                    return dom_Table_p;
                                }

                                var i_ScrollAmount = 0;
                                var i_RowsHeight = 0;

                                dom_CurrentTr = null;

                                var fn_v_setKeyNaviPosition = function (dom_Tr)
                                {
                                    dom_Tr.parent().find('tr').removeClass('hover');
                                    _this.iKeyNaviPosition = dom_Tr;
                                }

                                // Process content items
                                for (var s_Key in _this.aContentItems)
                                {
                                    // Create Row
                                    var dom_Tr = $("<tr></tr>")
                                                  .addClass("combotextbox_tr")
                                                  .attr("id", "combotextbox_tr_" + _this.sId + "_" + s_Key);

                                    dom_Tr.mouseover(function ()
                                    {
                                        fn_v_setKeyNaviPosition($(this));
                                        $(this).addClass('hover');
                                    });

                                    var dom_Td = $("<td></td>")
                                                  .append(_this.aContentItems[s_Key])
                                                  .addClass("combotextbox_td")
                                                  .attr("id", "combotextbox_td" + _this.sId + "_" + s_Key);
                                    dom_Tr.append(dom_Td);



                                    // Create Delete Column
                                    if (_this.bDeleteColumn != null && _this.bDeleteColumn)
                                    {
                                        var dom_IconRep = $("<a></a>")
                                                           .attr("id", "comboicon_delete_" + _this.sId + "_" + s_Key);
                                        var dom_Td_delete = $("<td></td>")
                                                             .addClass("combotextbox_td_delete")
                                                             .append(dom_IconRep);
                                        dom_Tr.append(dom_Td_delete);
                                    }

                                    _this.HTMLTable().append(dom_Tr);
                                    i_RowsHeight += i_DefaultRowHeight;

                                    // Find selected item and highlight
                                    if (_this.aContentItems[s_Key] == s_SelectedValue)
                                    {
                                        if (_this.bDisableAutoItemSelect == null || !_this.bDisableAutoItemSelect)
                                        {
                                            i_ScrollAmount = i_RowsHeight;
                                            dom_Tr.addClass("selected");
                                            _this.iSelectedKey = s_Key;
                                            _this.sSelectedText = s_SelectedValue;
                                        }
                                    }
                                    dom_Td.click(function (o_Event)
                                    {
                                        // Select an item
                                        _this.fn_v_ApplyChanges($(this).attr("id").replace("combotextbox_td" + _this.sId + "_", ""),
                                                                $(this).html(),
                                                                o_Event,
                                                                _this);
                                        if (_this.bAutoSelect != null && _this.bAutoSelect)
                                        {
                                            _this.HTML().val(_this.sSelectedText.replace(/&amp;/g, '&'));
                                            _this.HTML().blur();
                                            _this.fn_v_ShowOrHidePanel(false);
                                        }
                                        dom_CombotextboxPanelContainer.hide();
                                        if (_this.onAfterSelected)
                                            _this.onAfterSelected();
                                        $this.Page.b_LockValidationForComboSelect = false;
                                        o_Event.stopPropagation();
                                    });
                                }

                                _this.HTMLTable_p().append(_this.HTMLTable());
                                _this.HTMLPanel().html(_this.HTMLTable_p());

                                if (_this.bDeleteColumn != null && _this.bDeleteColumn && _this.onItemDelete)
                                {
                                    // Create Delete Icons
                                    for (var s_Key in _this.aContentItems)
                                    {
                                        var o_DeleteIcon = new $this.CustomControls.IconButton();
                                        o_DeleteIcon.s_Id = "comboicon_delete_" + _this.sId + "_" + s_Key;
                                        o_DeleteIcon.s_CSS = "comboicon_delete";
                                        o_DeleteIcon.s_Title = aLocalizations["textMSImgDelFavTitle"];
                                        o_DeleteIcon.b_DisableAutoComboClose = true;
                                        o_DeleteIcon.fn_v_onClick = function (sControlID)
                                        {
                                            var sCurrentKey = sControlID.replace("comboicon_delete_" + _this.sId + "_", "");
                                            _this.onItemDelete(_this.aContentItems[sCurrentKey], sCurrentKey);
                                            _this.fn_v_RemoveItem(sCurrentKey);
                                            _this.i_CountOfAvailableItems = Math.round(_this.HTMLTable().height() / i_DefaultRowHeight);
                                        }
                                        o_DeleteIcon.fn_v_InitControl("delete");
                                    }
                                }

                                // Attach scrollpane
                                _this.HTMLTable_p().jScrollPane({ showArrows: true, scrollbarWidth: 8 });
                                if (i_ScrollAmount - i_DefaultRowHeight >= 2 * i_DefaultRowHeight)
                                    _this.HTMLTable_p()[0].scrollTo(i_ScrollAmount - 3 * i_DefaultRowHeight);
                                else if (i_ScrollAmount - i_DefaultRowHeight >= i_DefaultRowHeight)
                                    _this.HTMLTable_p()[0].scrollTo(i_ScrollAmount - 2 * i_DefaultRowHeight);
                                else
                                    _this.HTMLTable_p()[0].scrollTo(i_ScrollAmount - i_DefaultRowHeight);

                                // Fix for ScrollPaneDrag
                                var dom_DragItem = _this.HTMLPanel().find(".jScrollPaneDrag");
                                if (dom_DragItem.height() < 8)
                                    dom_DragItem.css("height", "8px");

                                var fn_v_GenericClick = function (oEvent)
                                {
                                    oEvent.stopPropagation();
                                }

                                /* ie scrolldrag mouseup preventer */
                                if ($this.Browser.bIsIE)
                                {
                                    var dom_ScrolldDrag = $(".jScrollPaneDrag");

                                    dom_ScrolldDrag.mousedown(function () { $(document).bind('mouseup', fn_v_SetDocumentMouseup); b_ScrollDragPreventer = true; });

                                    var fn_v_SetDocumentMouseup = function ()
                                    {

                                        $(document).unbind('mouseup', fn_v_SetDocumentMouseup);
                                        window.setTimeout(function () { b_ScrollDragPreventer = false; }, 0);
                                    }

                                    $(document).click(function (event) { if (b_ScrollDragPreventer) event.stopImmediatePropagation(); });
                                }

                                $(".jScrollArrowUp").addClass('sprt');
                                $(".jScrollArrowDown").addClass('sprt');
                                $(".jScrollPaneDragTop").addClass('sprt');
                                $(".jScrollPaneDragBottom").addClass('sprt');

                                _this.HTMLPanel().find(".jScrollPaneTrack").unbind("mouseup", fn_v_PanelOnMouseUp)
                                                                           .mouseup(fn_v_PanelOnMouseUp)
                                                                           .unbind("click", fn_v_GenericClick)
                                                                           .click(fn_v_GenericClick);

                                _this.HTMLPanel().find(".jScrollCap").unbind("mouseup", fn_v_PanelOnMouseUp)
                                                                     .mouseup(fn_v_PanelOnMouseUp)
                                                                     .unbind("click", fn_v_GenericClick)
                                                                     .click(fn_v_GenericClick);

                                _this.HTMLPanel().find(".jScrollArrowUp").unbind("mouseup", fn_v_PanelOnMouseUp)
                                                                         .mouseup(fn_v_PanelOnMouseUp)
                                                                         .unbind("click", fn_v_GenericClick)
                                                                         .click(fn_v_GenericClick);

                                _this.HTMLPanel().find(".jScrollArrowDown").unbind("mouseup", fn_v_PanelOnMouseUp)
                                                                           .mouseup(fn_v_PanelOnMouseUp)
                                                                           .unbind("click", fn_v_GenericClick)
                                                                           .click(fn_v_GenericClick);
                                _this.fn_v_InitKeyNaviPosition(true);
                            });
                        }
                    }
                }
                // #endregion
            };

            // External Methods
            // #region
            this.ComboTextBox.get = function (sId)
            {
                return aComboTextBoxes[sId];
            }
            // #endregion

            // #endregion

            // IconButton Control
            // #region
            this.IconButton = function ()
            {
                // Properties
                // #region

                var _this = this;
                this.s_Id = null;
                this.s_CSS = null;
                this.s_Style = null;
                this.s_Title = null;
                this.fn_v_onClick = null;
                this.b_DisableAutoComboClose = null;

                // #endregion

                // fn_v_Disable
                // #region
                this.fn_v_Disable = function (b_Disable)
                {
                    if (b_Disable)
                        this.HTML().addClass("disabled");
                    else
                        this.HTML().removeClass("disabled");
                }
                // #endregion

                // fn_v_ShowOrHide
                // #region
                this.fn_v_ShowOrHide = function (b_show)
                {
                    if (b_show)
                        this.HTML().show();
                    else
                        this.HTML().hide();
                }
                // #endregion

                // fn_v_InitControl
                // #region
                this.fn_v_InitControl = function (s_ThemeId)
                {
                    // Create IconButton
                    var dom_IconButtonComponent = $("<div>&nbsp;</div>")
                                                   .addClass("sprt_l iconbutton");
                    if (this.s_Id)
                        dom_IconButtonComponent.attr("id", this.s_Id);
                    if (this.s_CSS)
                        dom_IconButtonComponent.addClass(this.s_CSS);
                    if (this.s_Style)
                        dom_IconButtonComponent.attr("style", this.s_Style);
                    if (this.s_Title)
                        dom_IconButtonComponent.attr("title", this.s_Title);

                    var dom_HTML = dom_IconButtonComponent;
                    $("#" + this.s_Id).replaceWith(dom_HTML);

                    this.HTML = function ()
                    {
                        return dom_HTML;
                    }
                    // Store instance of this atomic control
                    if (this.s_Id)
                        aIconButtons[this.s_Id] = this;

                    // onClick
                    var fn_v_OnClick = function (o_Event)
                    {
                        if (_this.fn_v_onClick)
                            _this.fn_v_onClick(_this.s_Id);
                        if (o_LastComboTextBox != null)
                        {
                            if (_this.b_DisableAutoComboClose == null || !_this.b_DisableAutoComboClose)
                            {
                                o_LastComboTextBox.fn_v_ShowOrHidePanel(false);
                                o_LastComboTextBox.fn_v_FocusOrBlur(o_LastComboTextBox, false);
                            }
                        }
                        o_Event.stopPropagation();
                    };

                    // Bind multiple events
                    this.HTML().unbind("click", fn_v_OnClick)
                               .click(fn_v_OnClick);

                    switch (s_ThemeId)
                    {
                        case "delete":
                            this.HTML().addClass("delete");
                            break;
                        case "email":
                            this.HTML().addClass("email");
                            break;
                        case "check":
                            this.HTML().addClass("check");
                            break;
                        case "globe":
                            this.HTML().addClass("globe");
                            break;
                        case "head":
                            this.HTML().addClass("head");
                            break;
                        case "clipboard":
                            this.HTML().addClass("clipboard");
                            break;
                        case "copy":
                            this.HTML().addClass("copy");
                            break;
                        case "loadinganim":
                            this.HTML().addClass("loadinganim");
                            break;
                        case "loadinganimbig":
                            this.HTML().addClass("loadinganimbig");
                            break;
                    }
                }
                // #endregion
            };

            // External Methods
            // #region
            this.IconButton.get = function (sId)
            {
                return aIconButtons[sId];
            }
            // #endregion

            // #endregion

            // Button Control
            // #region
            this.Button = function (options)
            {
                ///<summary>
                /// Button control      
                ///</summary>                
                ///<param name="options">
                /// s_Id - id of the button &#13;
                /// s_CSS - css class to be applied on the button &#13;
                /// s_Text - buttons text &#13;
                /// i_TabIndex - tab index, default 1 &#13;
                /// s_Style - inline style to be applied &#13;
                /// s_Theme - theme, possible values: big, small, default value big &#13;
                /// s_Color - buttons color, default orange &#13;
                /// b_KeepInMemory - wether button should be kept over page reloads &#13;
                /// b_DefaultButton - the button event which performs a form submit, default false &#13;
                ///</param>
                ///<return>
                /// Button object
                ///</return>
                if (!options["s_Id"])
                    return new $this.CustomControls.Button.fn.init(null, null);

                var default_args = {
                    's_CSS': false,
                    's_Text': "",
                    'i_TabIndex': 1,
                    's_Style': "",
                    's_Theme': 'big',
                    's_Color': 'orange',
                    'b_KeepInMemory': false,
                    'b_DefaultButton': false
                };

                for (var index in default_args)
                {
                    if (typeof options[index] == "undefined")
                        options[index] = default_args[index];
                }

                var oHTML = $("<table></table>")
                             .addClass("button")
                             .addClass(options.s_Color)
                             .attr("cellpadding", "0")
                             .attr("cellspacing", "0")
                             .attr("id", options.s_Id)
                             .attr("style", options.s_Style)
                if (options.s_Theme == "small")
                    oHTML.addClass('small');
                if (options.s_CSS)
                    oHTML.addClass(options.s_CSS);

                var oLabel = $("<span></span>");
                if (options.i_TabIndex)
                    oLabel.attr("tabindex", options.i_TabIndex);
                if (options.s_Text)
                    oLabel.append(options.s_Text);
                var oTdLeft = $("<td></td>")
                                .attr("class", "sprt buttonleft");
                var oTdMiddle = $("<td></td>")
                                .attr("class", "sprt_x buttonmiddle")
                                .append(oLabel);
                var oTdRight = $("<td></td>")
                                .attr("class", "sprt buttonright");
                var oTr = $("<tr></tr>")
                           .append(oTdLeft)
                           .append(oTdMiddle)
                           .append(oTdRight);
                var oTbody = $("<tbody></tbody>")
                              .append(oTr);
                oHTML.append(oTbody);
                $("#" + options.s_Id).replaceWith(oHTML);

                var fn_v_OnMouseClick = function (o_Event)
                {
                    if (oHTML.hasClass("disabled"))
                        return false;

                    fn_v_callback(c_a_ControlType.Button, options.s_Id, o_Event, $this.CustomControls.Button.get(options.s_Id));

                    if (options['b_DefaultButton'])
                        o_Event.stopPropagation();
                }

                var fn_v_OnKeyDown = function (o_Event)
                {
                    if (o_Event.keyCode == 13 ||
                        $this.InputLimiters.isSpecificKey(o_Event, KeyCodes.Space))
                        fn_v_OnMouseClick(o_Event);
                }

                aButtons[options.s_Id] = { "html": oHTML, "label": oLabel, "keepInMemory": options.b_KeepInMemory };
                oHTML.keydown(fn_v_OnKeyDown);
                oHTML.click(fn_v_OnMouseClick);

                if ($this.Page.b_AutoFocus &&
                    options["i_TabIndex"] &&
                    options["i_TabIndex"] < i_MinTabIndex)
                {
                    i_MinTabIndex = options["i_TabIndex"];
                    oHTML.focus().focus();
                }

                var o_ButtonWrapper = new $this.CustomControls.Button.fn.init(oHTML, oLabel, options.b_KeepInMemory);

                if (options.b_DefaultButton)
                    $this.Page.AddDefaultControlToForm(o_ButtonWrapper);
                return o_ButtonWrapper;
            };

            // External Methods
            // #region
            this.Button.get = function (sId)
            {
                var j_ArrayItem = aButtons[sId];
                if (!j_ArrayItem)
                    j_ArrayItem = { "html": null, "label": null, "keepInMemory": false };

                return new $this.CustomControls.Button.fn.init(j_ArrayItem.html, j_ArrayItem.label, j_ArrayItem.keepInMemory);
            }
            // #endregion

            this.Button.fn = this.Button.prototype = {
                init: function (html, label, keepInMemory)
                {
                    this.b_Exists = true;
                    if (!html)
                        this.b_Exists = false;

                    var o_HTML = html;
                    var s_Id = html ? html.attr("id") : '';
                    var o_Label = label;
                    this.HTML = function () { return o_HTML; }
                    this.Label = function () { return o_Label; }
                    var bDisabled = o_HTML ? o_HTML.hasClass("disabled") : false;

                    this.Disabled = function (bDisableButton)
                    {
                        if (bDisableButton != undefined)
                        {
                            bDisabled = bDisableButton;
                            if (bDisableButton)
                                o_HTML.addClass("disabled");
                            else
                                o_HTML.removeClass("disabled");
                        }
                        else
                        {
                            return bDisabled;
                        }
                    };

                    // Ondemand callbacks
                    this.OnClick = function (s_fnCallback, s_cbName)
                    {
                        fn_v_AddCallback(c_a_ControlType.Button, s_Id, s_fnCallback, s_cbName, keepInMemory);
                    };

                    this.RemoveOnClick = function (s_cbName)
                    {
                        fn_v_RemoveCallback(c_a_ControlType.Button, s_Id, s_cbName, keepInMemory);
                    };
                }
            };

            // #endregion

            // CheckBox Control
            // #region
            this.CheckBox = function (o_options)
            {
                // Set defaults
                if (!o_options['s_id']) return false;

                var default_args = {
                    's_CSS': false,
                    's_style': false,
                    's_text': false,
                    's_HTMLrId': false,
                    'i_tabIndex': false,
                    'o_fnCallBack': []
                };

                var o_this = this;
                var b_Checked = false;
                var b_Disabled = false;

                for (var i in default_args)
                {
                    if (typeof o_options[i] == "undefined")
                        o_options[i] = default_args[i];
                }

                // Create html
                var dom_Checkbox = $('<span></span>')
					.addClass("checkbox")
					.attr('id', o_options['s_id']);

                var dom_SpriteArea = $('<span></span>');
                dom_SpriteArea.addClass('sprt sprite');
                dom_Checkbox.append(dom_SpriteArea);

                var dom_ContextArea = $('<span></span>');

                if (o_options['s_HTMLrId'])
                {
                    var o_template = $('#' + o_options['s_HTMLrId']);
                    dom_ContextArea.append(o_template.clone());
                    o_template.remove();
                }
                else if (o_options['s_text'])
                {
                    dom_ContextArea.append(o_options['s_text']);
                }

                dom_Checkbox.append(dom_ContextArea);

                if (o_options['i_tabIndex'])
                    dom_Checkbox.attr("tabindex", o_options['i_tabIndex']);

                if (o_options['s_CSS'])
                    dom_Checkbox.addClass(o_options['s_CSS']);

                if (o_options['s_style'])
                    dom_Checkbox.attr('style', o_options['s_style']);

                $('#' + o_options['s_id']).replaceWith(dom_Checkbox);

                // Add to custom control array
                aCheckBoxes[o_options['s_id']] = { 'html': dom_Checkbox, 'b_Checked': b_Checked, 'b_Disabled': b_Disabled };

                var o_Wrapper = $this.CustomControls.CheckBox.fn.init(dom_Checkbox);

                // Private methods
                var fn_v_Toggle = function (o_Event)
                {
                    if (aCheckBoxes[o_options['s_id']].b_Disabled)
                        return false;

                    var o_CheckBox = $this.CustomControls.CheckBox.get(o_options.s_id);
                    o_CheckBox.Checked(!o_CheckBox.Checked());
                    fn_v_callback(c_a_ControlType.CheckBox, o_options.s_id, o_Event, o_CheckBox);
                };

                // Event binding
                var fn_v_OnKeyDown = function (o_Event)
                {
                    if (o_Event.keyCode == 32)
                        fn_v_Toggle(o_Event);
                };

                dom_Checkbox.keydown(fn_v_OnKeyDown);

                dom_Checkbox.click(fn_v_Toggle);

                dom_Checkbox.mousedown(function () { return false });

                if ($this.Page.b_AutoFocus &&
                    o_options["i_tabIndex"] &&
                    o_options["i_tabIndex"] < i_MinTabIndex)
                {
                    i_MinTabIndex = o_options["i_tabIndex"];
                    dom_ContextArea.focus().focus();
                }

                return o_Wrapper;
            };

            this.CheckBox.fn = this.CheckBox.prototype =
            {
                init: function (dom_HTML)
                {
                    this.b_Exists = true;
                    if (!dom_HTML)
                        this.b_Exists = false;

                    var dom_Checkbox = dom_HTML;
                    var dom_ContextArea = dom_HTML ? dom_HTML.find("label:first") : '';
                    var s_Id = dom_HTML ? dom_HTML.attr('id') : '';

                    var fn_v_Check = function ()
                    {
                        if (aCheckBoxes[s_Id].b_Disabled) return false;
                        aCheckBoxes[s_Id].b_Checked = true;
                        dom_Checkbox.addClass('checked');
                    };

                    var fn_v_UnCheck = function ()
                    {
                        if (aCheckBoxes[s_Id].b_Disabled) return false;
                        aCheckBoxes[s_Id].b_Checked = false;
                        dom_Checkbox.removeClass('checked')
                    };

                    var fn_v_SetDisabled = function ()
                    {
                        aCheckBoxes[s_Id].b_Disabled = true;
                        dom_Checkbox.addClass('disabled');
                    };

                    var fn_v_SetUnDisabled = function ()
                    {
                        aCheckBoxes[s_Id].b_Disabled = false;
                        dom_Checkbox.removeClass('disabled');
                    };

                    this.HTML = function () { return dom_Checkbox; };

                    this.Focus = function ()
                    {
                        dom_ContextArea.focus();
                    };

                    // Public methods
                    this.Checked = function ()
                    {
                        var a_args = arguments;
                        if (a_args.length === 0)
                        {
                            return aCheckBoxes[s_Id].b_Checked;
                        }
                        else
                        {
                            if (a_args[0] === true) fn_v_Check();
                            if (a_args[0] === false) fn_v_UnCheck();
                        }
                    };

                    this.Disabled = function ()
                    {
                        var a_args = arguments;
                        if (a_args.length === 0)
                        {
                            return aCheckBoxes[s_Id].b_Disabled;
                        }
                        else
                        {
                            if (a_args[0] === true) fn_v_SetDisabled();
                            if (a_args[0] === false) fn_v_SetUnDisabled();
                        }
                    };

                    // Ondemand callbacks
                    this.OnCheck = function (s_fnCallback, s_cbName)
                    {
                        fn_v_AddCallback(c_a_ControlType.CheckBox, s_Id, s_fnCallback, s_cbName);
                    };

                    this.RemoveOnCheck = function (s_cbName)
                    {
                        fn_v_RemoveCallback(c_a_ControlType.CheckBox, s_Id, s_cbName);
                    };
                }
            }

            // External Methods
            // #region
            this.CheckBox.get = function (sId)
            {
                var j_ArrayItem = aCheckBoxes[sId];
                if (!j_ArrayItem)
                    j_ArrayItem = { "html": null };

                return new $this.CustomControls.CheckBox.fn.init(j_ArrayItem.html);
            };
            // #endregion

            // #endregion

            // Radio Control
            // #region
            this.Radio = function (o_options)
            {
                // Set defaults
                if (!o_options['s_id'] ||
                    !o_options['s_name'])
                    return new $this.CustomControls.Radio.fn.init(null);

                var default_args = {
                    's_value': false,
                    's_CSS': false,
                    's_style': false,
                    's_text': false,
                    's_HTMLrId': false,
                    'i_tabIndex': false,
                    'o_fnCallBack': []
                };

                var o_this = this;
                var b_Selected = false;
                var b_Disabled = false;

                for (var i in default_args)
                {
                    if (typeof o_options[i] == "undefined")
                        o_options[i] = default_args[i];
                }

                o_this.value = o_options['s_value'];

                // Create html
                var dom_Radio = $('<span></span>')
					.addClass("radio")
					.addClass("unselected")
					.attr('id', o_options['s_id'])
                    .attr('name', o_options['s_name']);

                var dom_SpriteArea = $('<span></span>');
                dom_SpriteArea.addClass('sprt sprite');
                dom_Radio.append(dom_SpriteArea);

                var dom_ContextArea = $('<span></span>');

                if (o_options['s_HTMLrId'])
                {
                    var o_template = $('#' + o_options['s_HTMLrId']);
                    dom_ContextArea.append(o_template.clone());
                    o_template.remove();
                }
                else if (o_options['s_text'])
                {
                    dom_ContextArea.append(o_options['s_text']);
                }

                dom_Radio.append(dom_ContextArea);

                if (o_options['i_tabIndex'])
                    dom_Radio.attr("tabindex", o_options['i_tabIndex']);

                if (o_options['s_CSS'])
                    dom_Radio.addClass(o_options['s_CSS']);

                if (o_options['s_style'])
                    dom_Radio.attr('style', o_options['s_style']);

                $('#' + o_options['s_id']).replaceWith(dom_Radio);

                // Add to custom control array
                if (typeof (aRadios[o_options['s_name']]) == 'undefined')
                    aRadios[o_options['s_name']] = [];

                var o_Wrapper = new $this.CustomControls.Radio.fn.init(dom_Radio);

                var fn_v_OnSelectedByUser = function (o_Event)
                {
                    var o_Radio = $this.CustomControls.Radio.get(o_options.s_id);
                    if (!o_Radio.Selected())
                    {
                        o_Radio.Selected(true);
                        fn_v_callback(c_a_ControlType.Radio, o_options.s_id, o_Event, o_Radio);
                    }
                };

                // Event binding
                var fn_v_OnKeyDown = function (o_Event)
                {
                    if (o_Event.keyCode == 32)
                        fn_v_OnSelectedByUser(o_Event);
                };

                dom_Radio.keydown(fn_v_OnKeyDown);

                dom_Radio.click(fn_v_OnSelectedByUser);

                aRadios[o_options['s_name']][o_options['s_id']] = { 'html': dom_Radio, 'value': o_options['s_value'] };

                if ($this.Page.b_AutoFocus &&
                    o_options["i_tabIndex"] &&
                    o_options["i_tabIndex"] < i_MinTabIndex)
                {
                    i_MinTabIndex = o_options["i_tabIndex"];
                    dom_ContextArea.focus().focus();
                }

                return o_Wrapper;
            };

            this.Radio.fn = this.Radio.prototype =
            {
                init: function (dom_HTML, s_value)
                {
                    this.b_Exists = true;
                    if (!dom_HTML)
                        this.b_Exists = false;

                    var dom_Radio = dom_HTML;
                    //var b_Selected = dom_Radio ? dom_Radio.hasClass('selected') : false;
                    var b_Disabled = dom_Radio ? dom_Radio.hasClass('disabled') : false;
                    var s_Id = dom_Radio ? dom_Radio.attr('id') : '';
                    var s_Name = dom_Radio ? dom_Radio.attr('name') : '';
                    var s_Value = s_value;

                    // Private methods							
                    var fn_v_SetDisabled = function ()
                    {
                        b_Disabled = true;
                        dom_Radio.addClass('disabled');
                    };

                    var fn_v_SetUnDisabled = function ()
                    {
                        b_Disabled = false;
                        dom_Radio.removeClass('disabled');
                    };

                    // Public methods
                    this.Selected = function ()
                    {
                        var a_args = arguments;
                        if (a_args.length === 0)
                        {
                            return b_Selected = dom_Radio ? dom_Radio.hasClass('selected') : false;
                        }
                        else if (a_args.length === 1)
                        {
                            if (a_args[0] === true)
                            {
                                if (b_Disabled)
                                    return false;
                                if (dom_Radio ? dom_Radio.hasClass('selected') : false)
                                    return false;
                                for (var i in aRadios[s_Name])
                                {
                                    $this.CustomControls.Radio.get(i).Selected(false);
                                }
                                //b_Selected = true;
                                dom_Radio
						            .addClass('selected');
                            }
                            if (a_args[0] === false)
                            {
                                //b_Selected = false;
                                dom_Radio
						            .removeClass('selected');
                            }
                        }
                    };

                    this.HTML = function ()
                    {
                        return dom_HTML;
                    };

                    this.Value = function ()
                    {
                        return s_Value;
                    };

                    this.Disable = function ()
                    {
                        var a_args = arguments;
                        if (a_args.length === 0)
                        {
                            return b_Disabled;
                        }
                        else
                        {
                            if (a_args[0] === true) fn_v_SetDisabled();
                            if (a_args[0] === false) fn_v_SetUnDisabled();
                        }
                    };

                    // Ondemand callbacks
                    this.OnSelect = function (s_fnCallback, s_cbName)
                    {
                        fn_v_AddCallback(c_a_ControlType.Radio, s_Id, s_fnCallback, s_cbName);
                    };

                    this.RemoveOnSelect = function (s_cbName)
                    {
                        fn_v_RemoveCallback(c_a_ControlType.Radio, s_Id, s_cbName);
                    };
                }
            };

            // External Methods
            this.Radio.get = function (sId)
            {
                for (var i in aRadios)
                {
                    if (aRadios[i][sId])
                        return new $this.CustomControls.Radio.fn.init(aRadios[i][sId].html, aRadios[i][sId].value);
                }

                return new $this.CustomControls.Radio.fn.init(null);
            };

            this.Radio.Selected = function () // name , value 
            {
                var a_args = arguments;

                if (a_args.length === 0)
                {
                    return false;
                }
                else if (a_args.length === 1)
                {
                    for (var i in aRadios[a_args[0]])
                    {
                        var o_Radio = $this.CustomControls.Radio.get(i);
                        if (o_Radio.Selected() === true)
                        {
                            return o_Radio.Value();
                            break;
                        }
                    }
                    return false;
                }
                else
                {
                    for (var i in aRadios[a_args[0]])
                    {
                        if (aRadios[a_args[0]][i].value === a_args[1])
                        {
                            $this.CustomControls.Radio.get(i).Selected(true);
                            return true;
                            break;
                        }
                    }
                    return false;
                }

            };

            this.Radio.Disable = function () // name 
            {
                var a_args = arguments;
                if (a_args.length === 0)
                {
                    return false;
                }
                if (a_args.length === 1)
                {
                    for (var i in aRadios[a_args[0]])
                    {
                        if (aRadios[a_args[0]][i].Disable() === false)
                        {
                            return false;
                            break;
                        }
                    }
                    return true;
                }
                else
                {
                    for (var i in aRadios[a_args[0]])
                    {
                        if (a_args[1] === true) aRadios[a_args[0]][i].Disable(true);
                        if (a_args[1] === false) aRadios[a_args[0]][i].Disable(false);
                    }
                }
            }

            // #endregion

        }
        // #endregion

        // Validation
        // #region
        this.Validation = new function ()
        {
            this.bIsStringEmpty = function (sString)
            {
                if (sString &&
                    $.trim(sString) != "")
                    return false;

                return true;
            }
            this.fn_b_IsNumber = function (sNumber)
            {
                if (!$this.Validation.bIsStringEmpty(sNumber) &&
                    /^[0-9]+$/.test(sNumber))
                {
                    return true;
                }
                return false;
            }
            this.bIsEmailValid = function (sEmail)
            {
                if (!this.bIsStringEmpty(sEmail) &&
                    /^[\w-+!#\$\.']+@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(sEmail) &&
                    !(/\.\.|^\.|\.@/.test(sEmail)))
                    return true;

                return false;
            };
            this.fn_b_IsThereValidEmail = function (s_Emails)
            {
                var a_Emails = $this.Helpers.fn_a_GetEmails(s_Emails);

                if (a_Emails.length > 0)
                    return true;

                return false;
            };
            this.bIsPhoneNumber = function (sPhoneNumber)
            {
                // en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers
                var sValidChars = " 1234567890-+()[]./";
                var sPhone = $.trim(sPhoneNumber);
                if (sPhone.length == 0)
                {
                    return false;
                }
                for (var iCharPos = 0; iCharPos < sPhone.length; iCharPos++)
                {
                    if (sValidChars.indexOf(sPhone.charAt(iCharPos)) == -1)
                    {
                        return false;
                    }
                }
                return true;
            };
            this.bIsUrlString = function (sUrlString)
            {
                var sValidChars = "abcdefghijklmnopqrstuvwzxyABCDEFGHIJKLMNOPQRSTUVWZXY0123456789-_.";
                if (sUrlString.length == 0)
                {
                    return false;
                }

                for (var iCharPos = 0; iCharPos < sUrlString.length; iCharPos++)
                {
                    if (sValidChars.indexOf(sUrlString.charAt(iCharPos)) == -1)
                    {
                        return false;
                    }
                }
                return true;
            };
        };
        // #endregion

        // Helpers
        // #region
        this.Helpers = new function ()
        {
            // fn_s_EscapeJSONItem
            // #region
            this.fn_s_EscapeJSONItem = function (s_Item)
            {
                var s_BackSlash = String.fromCharCode(92);
                return s_Item
                    .replace(/\\/g, '&#92;')
                    .replace(/"/g, '&#34;');
            }
            // #endregion

            // fn_a_GetEmails
            // #region
            this.fn_a_GetEmails = function (s_Emails)
            {
                var s_Emails = s_Emails.replace(/;/g, ' ').replace(/,/g, ' ').split(' ');

                var a_Result = [];

                var validEmails = [];
                for (var i in s_Emails)
                {
                    if (!s_Emails[i] ||
                        $.trim(s_Emails[i]) == "" ||
                        /\.\.|^\.|\.@/.test($.trim(s_Emails[i])) ||
                        s_Emails[i].split('@').length != 2 ||
                        !/[\w-+!#\$\.']+@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/i.test($.trim(s_Emails[i])))
                        continue;

                    var s_Email = $.trim(s_Emails[i].match(/([\w-+!#\$\.']+@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?))/)[0]);

                    if (s_Email.length > 70)
                        continue;

                    a_Result.push(s_Email);
                }

                return a_Result;
            }
            // #endregion
        };
        // #endregion

        $(document).ready(function ()
        {
            $this.Content.o_attach(true);
            $this.Page.fn_v_setupModalDialog();
            $this.Page.fn_v_setupTooltip();
            $this.Page.fn_v_initSessionTimer();
            $this.Page.Tooltip.discoverHelpNodes();
            //$('#fblike').append('<iframe src="https://www.facebook.com/plugins/like.php?locale=en_US&amp;href=https%3A%2F%2Fjoin.me&amp;layout=standard&amp;show_faces=false&amp;width=100&amp;action=like&amp;font&amp;colorscheme=light&amp;height=50" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:50px;" allowTransparency="true"></iframe>');
        });
    };

    return getInstance();
};
// #endregion

// MainPage namespace
// #region
function MainPage()
{
    var instance = function ()
    {
        var $this = this;
        var oCode = $("#code");
        var error = JoinMe.CustomControls.Bubble.get("global");
        var joinButton = $("div.join:first");
        var dom_Share = $(".sharebutton");
        var dom_Join = $(".join");
        var b_ClickOnce = undefined;
        var s_LastCode = "";
        var b_IsPersonalUrl = false;

        setTimeout(function ()
        {
            var i_ErrorCode = JoinMe.Page.fn_s_GetParameterInHash("e");
            if (!JoinMe.Browser.bHasRequiredFlashVersion() ||
            i_ErrorCode == "2")
            {
                setTimeout(function ()
                {
                    if (!error.b_Exists)
                        error = JoinMe.CustomControls.Bubble.get("global");
                    if (!error.b_Exists)
                        return;
                    error.Content(aLocalizations["NoFlashError"]);
                    var offset = joinButton.position();
                    var left = offset.left - 19;
                    var top = offset.top - error.HTML().height() + 2;
                    if (JoinMe.Browser.eSessionType == SessionType.IE8)
                    {
                        top += 3;
                    }
                    else if (JoinMe.Browser.eSessionType == SessionType.IE7)
                    {
                        top += 8;
                    }
                    else if (JoinMe.Browser.eSessionType == SessionType.IE6)
                    {
                        top += 2;
                    }
                    error.Show(left, top);
                    $(document).unbind("click", $this.HideValidator);
                    $(document).click($this.HideValidator);
                }, 5);
            }
            else if (i_ErrorCode != null)
            {
                $this.ShowValidatorByErrorCode(i_ErrorCode);
            }
        }, 0);

        var bIsSelectEvent = false;
        var i_beamPos = 0;
        //oCode events
        // #region
        oCode.keydown(function (oEvent)
        {
            if (JoinMe.InputLimiters.isSpecificKey(oEvent, 13))
            {
                if (oCode.val().length == 0) return false;
                JoinMe.Page.Object.startViewer();
            }

            if (JoinMe.Browser.ePlatformType == 'MAC' &&
                /^[0-9]/.test(oCode.val().charAt(0)) &&
                (oCode.val().replace(/\-/g, '') < 9 ||
                oEvent.keyCode == 13 ||
                oEvent.keyCode == 8))
            {
                return true;
            }

            $this.HideValidator();

            if (oEvent.altKey)
                return false;
            bIsSelectEvent = JoinMe.InputLimiters.isSelectEvent(oEvent);
            if (bIsSelectEvent)
            {
                return true;
            }
            else if (JoinMe.InputLimiters.isPaste(oEvent))
            {
                oCode.val("");
                return true;
            }
            else if (JoinMe.InputLimiters.isCopy(oEvent))
            {
                return true;
            }
            else if (JoinMe.InputLimiters.isBasicFunctionKey(oEvent))
            {
                return true;
            }
            else
            {
                var b_IsWholeTextSelected = false;
                if (!JoinMe.Browser.bIsIE)
                {
                    if (oCode[0].selectionEnd - oCode[0].selectionStart == oCode.val().length)
                        b_IsWholeTextSelected = true;
                    else
                        b_IsWholeTextSelected = false;
                }
                else
                {
                    if (document.selection.createRange().text.length == oCode.val().length)
                        b_IsWholeTextSelected = true;
                    else
                        b_IsWholeTextSelected = false;
                }

                //check if its personal url
                if (oCode.val().length == 0 ||
                b_IsWholeTextSelected)
                {
                    if (JoinMe.InputLimiters.fn_b_IsCharacter(oEvent))
                    {
                        b_IsPersonalUrl = true;
                        return true;
                    }
                    else if (JoinMe.InputLimiters.isNumber(oEvent))
                    {
                        b_IsPersonalUrl = false;
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                if (b_IsPersonalUrl)
                {
                    if (JoinMe.InputLimiters.fn_b_IsCharacter(oEvent) ||
                    JoinMe.InputLimiters.isNumber(oEvent) ||
                    JoinMe.InputLimiters.isSpecificKey(oEvent, KeyCodes["-"]) ||
                    JoinMe.InputLimiters.isSpecificKey(oEvent, KeyCodes["."]) ||
                    (oEvent.shiftKey && JoinMe.InputLimiters.isSpecificKey(oEvent, KeyCodes["_"])))
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    if (oCode.val().length > 10)
                    {
                        if (!JoinMe.Browser.bIsIE)
                        {
                            if (oCode[0].selectionStart != oCode[0].selectionEnd && JoinMe.InputLimiters.isNumber(oEvent))
                                return true;
                            else
                                return false;
                        }
                        else
                        {
                            if (document.selection.createRange().text.length != 0)
                                return true;
                            else
                                return false;
                        }
                    }
                    else
                        return JoinMe.InputLimiters.isNumber(oEvent);
                }
            }
        });

        oCode.keyup(function (oEvent)
        {
            i_beamPos = oCode[0].selectionEnd;
            setTimeout(function ()
            {
                if (JoinMe.Browser.ePlatformType == 'MAC')
                {
                    if (oEvent.keyCode == 37 || oEvent.keyCode == 39)
                    {
                        i_beamPos = oCode[0].selectionEnd;
                        return true;
                    }
                    var code = oCode.val();
                    if (/^[0-9]/.test(code.charAt(0)))
                    {
                        if (code == "" || (/^[0-9\-]+$/.test(code) && code.replace(/\-/g, '').length <= 9))
                        {
                            var s_formattedCode = '';
                            code = code.replace(/\-/g, '');
                            for (var i = 0; i < code.length; i++)
                            {
                                if (i != 0 && i % 3 == 0)
                                {
                                    s_formattedCode += '-' + code.charAt(i);
                                }
                                else
                                {
                                    s_formattedCode += code.charAt(i);
                                }
                            }
                            if (i_beamPos == oCode.val().length)
                            {
                                i_beamPos++;
                            }
                            oCode.val(s_formattedCode);
                            s_LastCode = code;
                        }
                        else
                        {
                            oCode.val(s_LastCode);
                        }
                        oCode[0].selectionEnd = i_beamPos;
                    }
                    else
                    {
                        if (code == "" ||
                        /^[a-zA-Z0-9_\-\.]+$/.test(code))
                        {
                            s_LastCode = code;
                        }
                        else
                        {
                            oCode.val(s_LastCode);
                        }
                    }
                }
                else if (b_IsPersonalUrl)
                {
                    var code = oCode.val();
                    if (code == "" ||
                    /^[a-zA-Z0-9_\-\.]+$/.test(code))
                    {
                        s_LastCode = code;
                    }
                    else
                    {
                        oCode.val(s_LastCode);
                    }
                }
                else if (!bIsSelectEvent &&
                     !JoinMe.InputLimiters.isSpecificKey(oEvent, 37) &&
                     !JoinMe.InputLimiters.isSpecificKey(oEvent, 39) &&
                     !JoinMe.InputLimiters.isSpecificKey(oEvent, 35) &&
                     !JoinMe.InputLimiters.isSpecificKey(oEvent, 36))
                {
                    var code = oCode.val().replace(/-/g, "");
                    if (code == "" ||
                    JoinMe.Validation.fn_b_IsNumber(code))
                    {
                        s_LastCode = code;
                    }
                    else
                    {
                        oCode.val(s_LastCode);
                    }
                    formatCodeAreaText(oCode, JoinMe.InputLimiters.isSpecificKey(oEvent, 46),
                                                JoinMe.InputLimiters.isSpecificKey(oEvent, 8));

                    if (oCode.val().length > 11)
                        oCode.val(oCode.val().substring(0, 11));
                }
            }, 0);
        });

        var fn_v_Paste = function (oEvent)
        {
            setTimeout(function ()
            {
                // Previous logic was replaced in changelist 173229
                var s_PastedValue = $.trim(oCode.val());
                if (/^[0-9]/.test(s_PastedValue))
                {
                    s_PastedValue = s_PastedValue.match(/\d{9}|\d{3}-\d{3}-\d{3}|\d{3} \d{3} \d{3}/);
                    if (s_PastedValue != null)
                    {
                        oCode.val(s_PastedValue);
                        b_IsPersonalUrl = false;
                        formatCodeAreaText(oCode, false, false);
                        s_LastCode = oCode.val();
                        JoinMe.CustomControls.TextBox.setCaretPosition(oCode[0], 11);
                    }
                }
                else
                {
                    s_PastedValue = s_PastedValue.replace(/[^\.a-zA-Z0-9_-]/g, "");
                    oCode.val(s_PastedValue);
                    s_LastCode = s_PastedValue;
                    b_IsPersonalUrl = true;
                }
            }, 0);
        };

        oCode.bind("paste", fn_v_Paste);

        oCode.focus();
        // #endregion

        var s_Code = JoinMe.Page.fn_s_GetParameterInHash("code");
        if (s_Code != null)
        {
            oCode.val(s_Code);
            fn_v_Paste();
        }

        this.ShowValidatorByErrorCode = function (iErrorCode)
        {
            setTimeout(function ()
            {
                if (!error.b_Exists)
                    error = JoinMe.CustomControls.Bubble.get("global");
                if (!error.b_Exists)
                    return;
                error.Content(aLocalizations["MainError" + iErrorCode]);
                var offset = oCode.position();
                var left = offset.left - 20;
                var top = offset.top - error.HTML().height() + 2;
                error.Show(left, top);
                $(document).unbind("click", $this.HideValidator);
                $(document).click($this.HideValidator);
            }, 10);
        };

        this.HideValidator = function ()
        {
            error.Hide();
        };

        this.downloadHost = function (clickOnce)
        {
            var b_dl2frame = false; // download to iframe
            if ($('#downloadToIframe').length > 0)
            {
                b_dl2frame = true;
                var s_clientTicket = $('#clientTicket').val();
                var s_swapMode = $('#swapMode').val();
                var s_viewerName = encodeURI(encodeURIComponent($('#viewerName').val()));
                //var s_viewerName = $('#viewerName').val();
                var s_audioPanel = $('#audioPanel').val();
            }

            // Internet Explorer platforms, e.g: IE6, IE7, IE8, etc.
            // Firefox platforms, e.g.: FF2, FF3, etc.
            // .NET 2.0 or later is installed
        var j_Data = { url: null }
            if (JoinMe.Page.bIsUserLoggedIn)
            {
                if (JoinMe.CustomControls.Radio.Selected("share_options") == "personal")
                {
                    j_Data.url = $("#own_url").val();
                }
                else
                {
                    j_Data.url = "";
                }
            }

            var downloadRequestResponse = function (data)
            {
                if (b_dl2frame || data.iError == 0)
                {
                    var s_QueryString = "";

                    if (!b_dl2frame && JoinMe.Page.bIsUserLoggedIn)
                    {
                        s_QueryString = "?" + "code=" + data.i_ViewerCode + "&ticket=" + data.i_Ticket + "&transfer=" + data.s_TransferTicket;
                    }

                    if (JoinMe.Browser.bHasDotNet2OrLater &&
                        (clickOnce == undefined || clickOnce) &&
                        (JoinMe.Browser.bIsIE || JoinMe.Browser.eSessionType == SessionType.Firefox))
                    {
                        setTimeout(function ()
                        {
                            error.Content(aLocalizations["ClickOnceError"]);
                            var offset = $('div.share:last').position();
                            var left = offset.left - 19;
                            var top = offset.top - error.HTML().height() + 2;
                            error.Show(left, top);
                            $(document).unbind("click", $this.HideValidator).click($this.HideValidator);
                            $('#mainWrapper').addClass('validatorActive');
                        }, 8 * 1000);
                        setTimeout(function ()
                        {
                            $this.HideValidator();
                            $('#mainWrapper').removeClass('validatorActive');
                        }, 18 * 1000);

                        if (b_dl2frame)
                        {
                            s_QueryString = "?clientTicket=" + s_clientTicket + "&swapMode=" + s_swapMode + "&viewerName=" + s_viewerName + "&uniqueId=" + data.UniqueId + "&originId=" + data.OriginId;
                            if (s_audioPanel != '')
                                s_QueryString += "&audioPanel=1";
                            window.frames['downloadToIframe'].location = '/clickonce/clickoncedeployer.application' + s_QueryString;
                        }
                        else
                        {
                            if (s_RegisterTicket != '')
                                s_QueryString += s_QueryString.indexOf('?') != -1 ? '&forceupgrade=true' : '?forceupgrade=true';

                            if (s_QueryString.indexOf('?') != -1)
                                s_QueryString += '&';
                            else
                                s_QueryString += '?';

                            s_QueryString += "uniqueId=" + data.UniqueId + "&originId=" + data.OriginId;

                            window.location = '/clickonce/clickoncedeployer.application' + s_QueryString;
                        }
                    }
                    else
                    {
                        if (JoinMe.Browser.ePlatformType == PaltformType.MAC &&
                            JoinMe.Browser.b_JavaInstalled)
                        {
                            if (b_dl2frame)
                                s_QueryString = "?clientTicket=" + s_clientTicket;
                            $('applet').remove();
                            error.Content('<b>' + aLocalizations["textHomePageJWSNotification1"] + '</b>');
                            var offset = $('div.share:last').position();
                            var left = offset.left - 19;
                            var top = offset.top - error.HTML().height() + 2;
                            error.Show(left, top);
                            $(document).unbind("click", $this.HideValidator).click($this.HideValidator);
                            setTimeout(function ()
                            {
                                error.Content(aLocalizations["textHomePageJWSNotification2"]
                                    .replace('{0}', "<a style='color: #FFFFFF; cursor: pointer;' onclick='JoinMe.Page.Object.HideValidator();' href='javascript:window.location = \"/Download.aspx" + s_QueryString + "\"'>")
                                    .replace('{1}', '</a>'));
                                error.Show(left, top);
                                $(document).unbind("click", $this.HideValidator).click($this.HideValidator);
                            }, 10 * 1000);
                            setTimeout(function ()
                            {
                                $this.HideValidator();
                            }, 30 * 1000);
                            // Download with Java Web Start downloader
                            $('body').append('<applet code="com.logmein.joinme.JoinMeJApplet.class" archive="' + JoinMe.Page.s_SecureLocation + 'java/join.me.jar, ' + JoinMe.Page.s_SecureLocation + 'java/lib/swing-layout-1.0.4.jar" width="1" height="1"><param name="downloadUrl" value="' + JoinMe.Page.s_SecureLocation + '/Download.aspx' + s_QueryString + (s_QueryString.length == 0 ? '?' : '&') + 'prepareforjava=true"></applet>');
                        }
                        else
                        {
                            // Download without ClickOnce or Java Web Start downloader
                            if (clickOnce === false)
                            {
                                if (s_QueryString.indexOf("?") == -1)
                                    s_QueryString += "?";
                                else
                                    s_QueryString += "&";
                            }

                            if (b_dl2frame)
                            {
                                s_QueryString = "?clientTicket=" + s_clientTicket + "&swapMode=" + s_swapMode + "&viewerName=" + s_viewerName;
                                if (s_audioPanel != '')
                                    s_QueryString += "&audioPanel=1";
                                window.frames['downloadToIframe'].location = '/Download.aspx' + s_QueryString;
                            }
                            else
                            {
                                if (s_RegisterTicket != '')
                                    s_QueryString += s_QueryString.indexOf('?') != -1 ? '&forceupgrade=true' : '?forceupgrade=true';
                                window.location = '/Download.aspx' + s_QueryString;

                            }
                        }
                    }
                }
            }
            if (b_dl2frame)
            {
                downloadRequestResponse({});
            }
            else
            {
                $.ajaxSetup({ async: false });
                JoinMe.Page.fn_v_SendAjax(WebServices.Common, "hostDownloadRequested", j_Data, downloadRequestResponse);
                $.ajaxSetup({ async: true });
            }
        };

        this.startViewer = function ()
        {
            var o_CodeOrPersonalLink = $.trim(oCode.val());
            if (o_CodeOrPersonalLink.length > 0 &&
            o_CodeOrPersonalLink != "")
            {
                if (/^[0-9]*$/.test(o_CodeOrPersonalLink.replace(/-/g, "").replace(/ /g, "")))
                    window.location = c_j_BackendPages.c_s_FlashClient + "?code=" + oCode.val().replace(/-/g, "").replace(/ /g, "") + "&flashVersion" + JoinMe.Browser.FlashVersion();
                else
                    window.location = c_j_BackendPages.c_s_FlashClient + "?personalurl=" + oCode.val() + "&flashVersion" + JoinMe.Browser.FlashVersion();
            }
            else
            {
                setTimeout(function ()
                {
                    $this.ShowValidatorByErrorCode(4);
                }, 0);
            }
        };

        var fn_v_ShareClicked = function (o_Event)
        {
            $('#googleconversion').remove();
            o_Event.stopPropagation();
            $this.downloadHost();
            dcsMultiTrack('DCS.dcssip', 'join.me', 'DCS.dcsuri', '/ShareClick', 'Wt.ti', 'Share');
            try { parent._gaq.push(['_trackEvent', 'Buttons', 'Click', 'JoinMe-Share']) } catch (e) { ; };
            $('body').append('<iframe id="googleconversion" src="googleconversion.html" frameborder="0" scrolling="no" style="width:0;height:0;overflow:hidden;visibility:hidden"></iframe>');
        };

        dom_Share.unbind("click", fn_v_ShareClicked).click(fn_v_ShareClicked);

        var fn_v_JoinClicked = function (o_Event)
        {
            o_Event.stopPropagation();
            $this.startViewer();
            dcsMultiTrack('DCS.dcssip', 'join.me', 'DCS.dcsuri', '/JoinClick', 'Wt.ti', 'Join');
            try { parent._gaq.push(['_trackEvent', 'Buttons', 'Click', 'JoinMe-Join']) } catch (e) { ; };
        };

        dom_Join.unbind("click", fn_v_JoinClicked).click(fn_v_JoinClicked);

        var formatCodeAreaText = function (oObject, bIsDelete, bIsBackSpace)
        {
            if (!b_IsPersonalUrl)
            {
                var iCursorPos = JoinMe.CustomControls.TextBox.getCaretPosition(oObject[0]);
                var sOldValue = oObject.val().replace(/-/g, "");
                var sNewValue = "";
                for (var j = 0; j < sOldValue.length; j++)
                {
                    sNewValue += sOldValue.charAt(j);
                    if (j == 2 || j == 5)
                    {
                        sNewValue += "-";
                    }
                }

                if (bIsBackSpace)
                {
                    if (sNewValue.charAt(sNewValue.length - 1) == "-")
                        sNewValue = sNewValue.substring(0, sNewValue.length - 1);
                    oObject.val(sNewValue);
                    if (iCursorPos == 4 || iCursorPos == 8)
                        JoinMe.CustomControls.TextBox.setCaretPosition(oObject[0], iCursorPos - 1);
                    else
                        JoinMe.CustomControls.TextBox.setCaretPosition(oObject[0], iCursorPos);
                }
                else if (bIsDelete)
                {
                    if (sNewValue.charAt(sNewValue.length - 1) == "-")
                        sNewValue = sNewValue.substring(0, sNewValue.length - 1);
                    oObject.val(sNewValue);
                    JoinMe.CustomControls.TextBox.setCaretPosition(oObject[0], iCursorPos);
                }
                else
                {
                    if (sNewValue.charAt(sNewValue.length - 1) == "-" ||
                sNewValue.charAt(iCursorPos - 1) == "-" ||
                sNewValue.charAt(iCursorPos) == "-")
                        iCursorPos++;
                    if (sNewValue.charAt(sNewValue.length - 1) == "-" &&
                iCursorPos < sNewValue.length)
                    {
                        sNewValue = sNewValue.substring(0, sNewValue.length - 1);
                    }
                    oObject.val(sNewValue);
                    JoinMe.CustomControls.TextBox.setCaretPosition(oObject[0], iCursorPos);
                }
            }
        };

        this.showMaintenanceMessage = function ()
        {
            var content_ = '';
            content_ += '<div id="maintenancePopupMessage">';
            content_ += '   <h1>' + aLocalizations["maintenanceMessageHeader"] + '</h1>';
            content_ += '   <div class="leftpane">';
            content_ += '       <div>' + aLocalizations["maintenanceMessageLBDate"] + ': <b>' + aLocalizations["maintenanceMessageESTDate"] + '</b></div>';
            content_ += '       <div>' + aLocalizations["maintenanceMessageLBTime"] + ': <b>' + aLocalizations["maintenanceMessageESTTime"] + '</b> (EST)</div>';
            content_ += '       <div>' + aLocalizations["maintenanceMessageLBDuration"] + ': <b>' + aLocalizations["maintenanceMessageDuration"] + ' min</b></div>';
            content_ += '   </div>';
            content_ += '   <div class="rightpane">';
            content_ += '       <div>' + aLocalizations["maintenanceMessageLBDate"] + ': <b>' + aLocalizations["maintenanceMessageCETDate"] + '</b></div>';
            content_ += '       <div>' + aLocalizations["maintenanceMessageLBTime"] + ': <b>' + aLocalizations["maintenanceMessageCETTime"] + '</b> (CET)</div>';
            content_ += '       <div>' + aLocalizations["maintenanceMessageLBDuration"] + ': <b>' + aLocalizations["maintenanceMessageDuration"] + ' min</b></div>';
            content_ += '   </div>';
            content_ += '   <div class="wideblock">' + aLocalizations["maintenanceMessageText"] + '</div>';
            content_ += '</div>';

            JoinMe.Page.ModalDialog.Content(content_);
            JoinMe.Page.ModalDialog.b_ShowCloseButton(false);
            JoinMe.Page.ModalDialog.Show();
        };
    }

    if (!this.instance)
        this.instance = new instance();
    return this.instance;
}


// #endregion

// JQuery Extension Methods
// #region
jQuery.fn.extend(
{
    isVisible: function ()
    {
        return (this.css("display") != "none");
    },
    jm_hide: function ()
    {
        this.hide();
        JoinMe.Menu.setMenuContentPosition();
    },
    jm_show: function ()
    {
        this.show();
        JoinMe.Menu.setMenuContentPosition();
    }
});

jQuery.jsonToString = function (json)
{
    var sJSON = '{"';
    var bIsFirst = true;
    for (var item in json)
    {
        if (!bIsFirst)
            sJSON += ',"';
        else
            bIsFirst = false;
        sJSON += item + '":';
        if (json[item] == null ||
            json[undefined])
            sJSON += null;
        else if (typeof (json[item]) == "string")
            sJSON += '"' + json[item] + '"';
        else
            sJSON += json[item];
    }
    if (sJSON == '{"')
        return '{}';
    else
        return sJSON + "}";
};

jQuery.jsonToString_v2 = function (j_Data)
{
    var s_JSON = '{"';
    var b_IsFirst = true;
    for (var s_Item in j_Data)
    {
        if (!b_IsFirst)
            s_JSON += ',"';
        else
            b_IsFirst = false;
        s_JSON += JoinMe.Helpers.fn_s_EscapeJSONItem(s_Item) + '": ';
        if (j_Data[s_Item] == null || j_Data[undefined])
            s_JSON += null;
        else if (typeof (j_Data[s_Item]) == "string")
            s_JSON += '"' + JoinMe.Helpers.fn_s_EscapeJSONItem(j_Data[s_Item]) + '"';
        else
            s_JSON += j_Data[s_Item];
    }
    if (s_JSON == '{"')
        return '{}';
    else
        return s_JSON + "}";
};

jQuery.clone = function (j_Object)
{
    return eval('(' + $.jsonToString_v2(j_Object) + ')');
};

jQuery.inherit = function (subClass, baseClass)
{
    if (arguments.length > 2)
    {
        subClass.prototype = new baseClass(Array.prototype.slice.call(arguments, 2));
        subClass.prototype.constructor = subClass;

        subClass.base = new baseClass(Array.prototype.slice.call(arguments, 2));

        baseClass.call(subClass, Array.prototype.slice.call(arguments, 2));
    }
    else
    {
        subClass.prototype = new baseClass();
        subClass.prototype.constructor = subClass;

        subClass.base = new baseClass();

        baseClass.call(subClass);
    }
};
// #endregion

function fn_v_GoTo(s_location)
{
    if ($('#ms_dom_container').length != 0 &&
        JoinMe.Page.b_SaveConfirmed &&
        JoinMe.Page.Object &&
        JoinMe.Page.Object.o_SaveFlow &&
        JoinMe.Page.Object.o_SaveFlow.fn_b_ConfirmSaveChanges('updateMainContent', null, function ()
        {
            top ? (top.window.location.href = s_location) : (window.location.href = s_location);
        }))
    {
        return false;
    }
    else
    {
        top ? (top.window.location.href = s_location) : (window.location.href = s_location);
        return true;
    }
}

function fn_v_LogOut()
{
    if ($('#ms_dom_container').length != 0 &&
        JoinMe.Page.b_SaveConfirmed &&
        JoinMe.Page.Object &&
        JoinMe.Page.Object.o_SaveFlow &&
        JoinMe.Page.Object.o_SaveFlow.fn_b_ConfirmSaveChanges('updateMainContent', null, function ()
        {
            JoinMe.Page.b_LogoutTriggered = true;
            JoinMe.Page.fn_v_SendAjax(WebServices.Common, 'logout', null, UserLogout);
        }))
    {
        return;
    }
    else
    {
        JoinMe.Page.b_LogoutTriggered = true;
        JoinMe.Page.fn_v_SendAjax(WebServices.Common, 'logout', null, UserLogout);
    }
}

function InternalTracking (userType, trackEvent)
{
    var isLoggedIn = JoinMe.Page.bIsUserLoggedIn;

    var sendRequest = function (trackEvent)
    {
        $.ajaxSetup({ async: false });
        JoinMe.Page.fn_v_SendAjax_v2(WebServices.Common, 'TrackUserInteractions', { ActionName: trackEvent }, false);
        $.ajaxSetup({ async: true });
    }

    switch (userType)
    {
        case 'all':
            sendRequest(trackEvent);
            break;
        case 'free':
            if (!isLoggedIn) sendRequest(trackEvent);
            break;
        case 'pro':
            if (isLoggedIn) sendRequest(trackEvent);
            break;
    }
}


