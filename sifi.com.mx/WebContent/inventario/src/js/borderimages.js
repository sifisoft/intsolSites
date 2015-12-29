
var borderImages = new function ()
{
    var patchRules = [];
    var styleSheet_ = '';

    //---->		
    var createStyle = function (patch_data, class_name, patch_name)
    {
        var rule = '';
        for (var i in patch_data)
            rule += i + ':' + patch_data[i] + ';';
        	//alert(rule);
        if (patch_name != '.nineholder_b' && patch_name != '.nineholder_a')
        {
            rule = ' .' + class_name + ' .nineholder_b .' + patch_name + '{' + rule + '}';
        }
        else if (patch_name == '.nineholder_a' && class_name != '')
        {
            if (class_name) rule = ' .' + class_name + ' .nineholder_a{' + rule + '}';
        }
        else
            rule = ' ' + patch_name + '{' + rule + '}';
        styleSheet_ += rule;
    };

    //---->	
    var addStyleSheet = function (styles_, id_)
    {
        var styleNode = document.createElement("style");
        styleNode.id = id_;
        document.getElementsByTagName("head")[0].appendChild(styleNode);
        if (styleNode.styleSheet)
            styleNode.styleSheet.cssText = styles_;
        if (id_ != 'nineholderFPrevent')
        {
            var node = document.getElementById('nineholderFPrevent');
            if (node)
                node.parentNode.removeChild(node);
        }
    };
    addStyleSheet('.nineholder_a{visibility:hidden}', 'nineholderFPrevent');

    //---->		
    var nineHolderRule = function ()
    {
        var nha = {
            'position': 'absolute',
            'display': 'block',
            'width': '986px',
            'min-height': '100%',
            'overflow': 'hidden'
        };
        createStyle(nha, '', '.nineholder_a');
        var nhb = {
            'position': 'absolute',
            'display': 'block',
            'top': 0,
            'left': 0,
            'width': '998px',
            'height': '100%',
            'overflow': 'hidden'
        };
        createStyle(nhb, '', '.nineholder_b');
    };

    //---->		
    var calculateRules = function (patchData)
    {
        if (!patchData['fpath'])
            return;
        for (var i in patchData)
        {
            if (i != 'fpath' && i != 'patch_class')
                patchData[i] = parseInt(patchData[i]);
        };
        var fPath = patchData['fpath'];
        var pClass = patchData['patch_class'];
        var sTop = patchData['stretch_top'];
        var sLeft = patchData['stretch_left'];
        var sWidth = patchData['stretch_width'];
        var sHeight = patchData['stretch_height'];
        var iTop = 0;
        var iLeft = 0;
        var iWidth = ifWidth = patchData['image_full_width'];
        var iHeight = ifHeight = patchData['image_full_height'];

        var tl = {
            'position': 'absolute',
            'display': 'block',
            'top': 0,
            'left': 0,
            'width': sLeft + 'px',
            'height': sTop + 'px',
            'background-image': 'url(' + fPath + ')',
            'background-position': -1 * iLeft + 'px ' + (-1 * iTop) + 'px'
        };
        createStyle(tl, pClass, 'tl');

        var tr = tl;
        delete tr.left; tr.right = 0;
        tr['background-position'] = (-1 * (iLeft + (iWidth - sLeft))) + 'px ' + (-1 * iTop) + 'px';
        createStyle(tr, pClass, 'tr');

        var bl = tl;
        delete bl.top; bl.bottom = 0;
        delete bl.right; bl.left = 0;
        bl['background-position'] = -1 * iLeft + 'px ' + (-1 * (iTop + (iHeight - sTop))) + 'px';
        createStyle(bl, pClass, 'bl');

        var br = bl;
        delete br.left; br.right = 0;
        bl['background-position'] = (-1 * (iLeft + (iWidth - sLeft))) + 'px ' + (-1 * (iTop + (iHeight - sTop))) + 'px';
        createStyle(br, pClass, 'br');

        var tm = {
            'position': 'relative',
            'display': 'block',
            'overflow': 'hidden',
            'margin': '0 ' + sLeft + 'px 0 ' + sLeft + 'px',
            'height': sTop + 'px'
        };
        createStyle(tm, pClass, 'tm');

        var tmi = {
            'position': 'absolute',
            'display': 'block',
            'top': -1 * iTop + 'px',
            'height': ifHeight + 'px',
            'width': 100 * ifWidth / sWidth + '%',
            'left': -100 * (sLeft + iLeft) / sWidth + '%'
        };
        createStyle(tmi, pClass, 'tm img');

        var bm = tm;
        bm['margin-top'] = -2 * sTop + 'px';
        createStyle(bm, pClass, 'bm');

        var bmi = tmi;
        bmi['top'] = -1 * (iTop + sTop + sHeight) + 'px';
        createStyle(bmi, pClass, 'bm img');

        var ch = {
            'position': 'relative',
            'display': 'block',
            'overflow': 'hidden',
            'height': '100%'
        };
        createStyle(ch, pClass, 'ch');

        var ml = {
            'position': 'absolute',
            'display': 'block',
            'height': '100%',
            'overflow': 'hidden',
            'width': sLeft + 'px',
            'left': 0,
            'top': 0,
            'margin-top': -2 * sTop + 'px'
        };
        createStyle(ml, pClass, 'ml');

        var mli = {
            'position': 'absolute',
            'top': -100 * (sTop + iTop) / sHeight + '%',
            'height': 100 * ifHeight / sHeight + '%',
            'width': ifWidth + 'px',
            'left': -1 * iLeft + 'px'
        };
        createStyle(mli, pClass, 'ml img');

        var mr = ml;
        delete mr.left; mr['right'] = 0;
        createStyle(mr, pClass, 'mr');

        var mri = mli;
        mri['left'] = -1 * (iLeft + sLeft + sWidth) + 'px';
        createStyle(mri, pClass, 'mr img');

        var mm = {
            'position': 'relative',
            'display': 'block',
            'height': '100%',
            'overflow': 'hidden',
            'margin-left': sLeft + 'px',
            'margin-right': sLeft + 'px',
            'top': -2 * sTop + 'px'
        };
        createStyle(mm, pClass, 'mm');

        var mmi = {
            'position': 'absolute',
            'top': -100 * (sTop + iTop) / sHeight + '%',
            'height': 100 * ifHeight / sHeight + '%',
            'width': 100 * ifWidth / sWidth + '%',
            'left': -100 * (sLeft + iLeft) / sWidth + '%'
        };
        createStyle(mmi, pClass, 'mm img');

        var nha = {
            'padding': sTop + 'px ' + sLeft + 'px ' + sTop + 'px ' + sLeft + 'px',
            'top': -1 * sTop + 'px',
            'left': -1 * sLeft + 'px'
        };
        createStyle(nha, pClass, '.nineholder_a');
    };

    //---->		
    var exploreCssRules = function ()
    {
        var styleSheetText;
        var styleSheetCounter = 0;
        var headnode = document.getElementsByTagName('HEAD')[0];
        var linknodes = headnode.getElementsByTagName('LINK');
        var stylenodes = headnode.getElementsByTagName('STYLE');
        var getCss = function (url)
        {
            var request = false;
            if (window.XMLHttpRequest)
            {
                request = new XMLHttpRequest();
                if (request.overrideMimeType) request.overrideMimeType('text/xml');
            }
            else if (window.ActiveXObject)
            {
                try { request = new ActiveXObject("Msxml2.XMLHTTP") }
                catch (e)
                {
                    try { request = new ActiveXObject("Microsoft.XMLHTTP") }
                    catch (e) { void (0) }
                }
            }
            if (!request) { alert('Request error!'); return false; }
            request.open('GET', url, true);
            request.onreadystatechange = function ()
            {
                if (request.readyState == 4)
                {
                    if (request.status == 200)
                    {
                        styleSheetText += request.responseText;
                        styleSheetCounter++;
                        if (styleSheetCounter == linknodes.length)
                        {
                            for (var i = 0; i < stylenodes.length; i++)
                            {
                                styleSheetText += stylenodes[i].innerHTML;
                            };
                            parseCssRules(styleSheetText);
                        }
                    }
                    else { ; }
                }
            };
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
        };
        for (var i = 0; i < linknodes.length; i++)
        {
            if (linknodes[i].rel.toLowerCase() == 'stylesheet')
                getCss(linknodes[i].href);
        }
    }

    //---->	
    var parseCssRules = function (cssText)
    {
        cssText = cssText.replace(/[\f\n\r\t\v\u00A0\u2028\u2029]/g, '');
        cssText = cssText.replace(/\/\*(.*?)\*\//g, '');
        cssText = cssText.split('}');
        for (var i = 0; i < cssText.length; i++)
        {
            if (cssText[i].indexOf('border-image') != -1)
            {
                var rule = cssText[i].split('{');
                var ruleNames = rule[0];
                var ruleValues = rule[1];
                ruleNames = ruleNames.replace(/[^a-zA-Z0-9\-\_\.\,]/g, '');
                ruleNames = ruleNames.split(',');
                for (var j = 0; j < ruleNames.length; j++)
                {
                    var ruleName = ruleNames[j];
                    if (ruleName.charAt(0) == '.')
                    {
                        ruleName = ruleName.replace(/\./g, '');
                        var values = ruleValues.split(';');
                        for (var k = 0; k < values.length; k++)
                        {
                            if (values[k].indexOf('border-image') != -1 && values[k].indexOf('-border-image') == -1)
                            {
                                var val = values[k].split(':')[1].split(')');
                                patchRules[ruleName] = {
                                    imgUrl: val[0].replace(/(.*)url(.*)\(/gi, '').replace(/ /g, '').replace('src','..'),
                                    slices: val[1].replace(/[^0-9 ]/g, '').replace(/\s{2,}/g, ' ').replace(/^\s+|\s+$/g, '').split(' ')
                                };
                            }
                        }
                    }
                }
            }
        }
        discoverNodes();
    };

    //---->	
    var createHtmlStructure = function (patchNodes)
    {	
    	
    	
        for (var i = 0; i < patchNodes.length; i++)
        {
            var targetNode = patchNodes[i];
            var imageFilePath = patchRules[targetNode.patchClass].imgUrl;
            
            var img = '<img src="' + imageFilePath + '"/>';
            var n1 = '<b class="';
            var n2 = '"></b>';
            var n3 = '</b>';
            var n4 = '">';
            var bgNodes = n1 + 'tl' + n2 + n1 + 'tr' + n2 + n1 + 'bl' + n2 + n1 + 'br' + n2 + n1 + 'tm' + n4 + img + n3 + n1 + 'ch' + n4 + n1 + 'ml' + n4 + img + n3 + n1 + 'mm' + n4 + img + n3 + n1 + 'mr' + n4 + img + n3 + n3 + n1 + 'bm' + n4 + img + n3;
            var nineHolder = document.createElement('b');
            nineHolder.className = 'nineholder_a';
            nineHolder.innerHTML = '<b class="nineholder_b">' + bgNodes + '</b>';
            targetNode.insertBefore(nineHolder, targetNode.firstChild);
        }
    };

    //---->	
    var createNinePatch = function (patchData)
    {
        for (var i = 0; i < patchData.length; i++)
        {
            calculateRules(patchData[i]);
        };
        addStyleSheet(styleSheet_, 'patchrules');
    };

    //---->	
    var getPatchData = function (filepathBuffer)
    {
        var patchData = [];
        for (var i in patchRules)
        {
            var rule = patchRules[i];
            var rd = {};
            rd.patch_class = i;
            rd.fpath = rule.imgUrl;
            rd.image_full_width = filepathBuffer[rule.imgUrl].width;
            rd.image_full_height = filepathBuffer[rule.imgUrl].height;
            if (rule.slices)
            {
                rd.stretch_left = rule.slices[3];
                rd.stretch_width = rd.image_full_width - 2 * rd.stretch_left;
                rd.stretch_top = rule.slices[0];
                rd.stretch_height = rd.image_full_height - 2 * rd.stretch_top;
            };
            patchData.push(rd);
        };
        createNinePatch(patchData);
    };

    //---->	
    var getFullImageSizes = function ()
    {
        var filepathBuffer = [];
        var bufferCounter = 0;
        for (var i in patchRules)
        {
            var imgSrc = patchRules[i].imgUrl;
            if (!filepathBuffer[imgSrc])
            {
                filepathBuffer[imgSrc] = true;
                bufferCounter++;
            }
        };
        for (var i in filepathBuffer)
        {
            var tempImage = new Image();
            tempImage.src = i + '?' + new Date().getTime();
            tempImage.index = i;
            tempImage.onload = function ()
            {
                bufferCounter--;
                filepathBuffer[this.index] = { 'width': this.width, 'height': this.height };
                if (bufferCounter == 0)
                    getPatchData(filepathBuffer);
            };
            tempImage.onerror = tempImage.onload;
        }
    }

    //---->
    var discoverNodes = function ()
    {
        var nodes = document.getElementsByTagName('body')[0].getElementsByTagName('div');
        var patchNodes = [];
        for (var i = 0; i < nodes.length; i++)
        {
            if (nodes[i].borderImageProcessed)
                continue;
            var cName = nodes[i].className;
            if (patchRules[cName])
            {
                nodes[i].patchClass = cName;
                nodes[i].borderImageProcessed = true;
                patchNodes.push(nodes[i]);
            }
        };
        createHtmlStructure(patchNodes);
        getFullImageSizes();
    };

    this.init = function ()
    {        
        if (navigator.userAgent.indexOf('MSIE') == -1)
            return;
        nineHolderRule();
        exploreCssRules();
        $("#freeandnoreg").css("margin-bottom","-10px");
        $("#maincontentwindow").css("height","524px");
        $(".mainBgGray").css("left","-1px");
        $(".mainBgGray").css("padding-bottom","9px");
        $("#maincontentwindow").css("margin-top","12px");
    }

    this.reInit = function ()
    {
        if (navigator.userAgent.indexOf('MSIE') == -1)
            return;
        discoverNodes();
        $("#freeandnoreg").css("margin-bottom","-10px");
        $("#maincontentwindow").css("height","524px");
        $(".mainBgGray").css("left","-1px");
        $(".mainBgGray").css("padding-bottom","9px");
        $("#maincontentwindow").css("margin-top","12px");
    }
};




