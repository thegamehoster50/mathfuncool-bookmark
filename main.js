javascript: (function() {
    var guiContainer = document.createElement('div');
    guiContainer.style.position = 'fixed';
    guiContainer.style.top = '50px';
    guiContainer.style.left = '0';
    guiContainer.style.width = '40%';
    guiContainer.style.height = '50%';
    guiContainer.style.borderRadius = '10px';
    guiContainer.style.border = '1px solid #000';
    guiContainer.style.background = '#000';
    guiContainer.style.zIndex = '9999';
    guiContainer.style.display = 'block';
    guiContainer.style.overflow = 'hidden';
    guiContainer.style.resize = 'both';
    var headerContainer = document.createElement('div');
    headerContainer.style.background = '#333';
    headerContainer.style.height = '20px';
    headerContainer.style.cursor = 'move';
    headerContainer.style.borderTopLeftRadius = '10px';
    headerContainer.style.borderTopRightRadius = '10px';
    headerContainer.style.userSelect = 'none';
    guiContainer.appendChild(headerContainer);
    var logoButton = document.createElement('button');
    logoButton.textContent = 'M';
    logoButton.style.position = 'absolute';
    logoButton.style.top = '0';
    logoButton.style.left = '0';
    logoButton.style.width = '20px';
    logoButton.style.height = '20px';
    logoButton.style.border = 'none';
    logoButton.style.background = '#333';
    logoButton.style.color = '#fff';
    logoButton.style.borderTopLeftRadius = '10px';
    logoButton.style.borderBottomLeftRadius = '10px';
    logoButton.addEventListener('click', function() {
        menuContainer.style.display = menuContainer.style.display === 'none' ? 'block' : 'none';
    });
    headerContainer.appendChild(logoButton);
    var mathFunCoolText = document.createElement('div');
    mathFunCoolText.style.width = '100%';
    mathFunCoolText.style.height = '20px';
    mathFunCoolText.style.textAlign = 'center';
    mathFunCoolText.style.userSelect = 'none';
    mathFunCoolText.textContent = 'MathFunCool';
    headerContainer.appendChild(mathFunCoolText);
    var closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '0';
    closeButton.style.right = '0';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.background = 'none';
    closeButton.style.fontWeight = 'bold';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(guiContainer);
    });
    headerContainer.appendChild(closeButton);
    var menuContainer = document.createElement('div');
    menuContainer.style.position = 'absolute';
    menuContainer.style.top = '20px';
    menuContainer.style.left = '0';
    menuContainer.style.width = '50%';
    menuContainer.style.height = '230px';
    menuContainer.style.borderRadius = '0 0 10px 10px';
    menuContainer.style.border = '1px solid #000';
    menuContainer.style.background = '#333';
    menuContainer.style.display = 'none';
    menuContainer.style.zIndex = '1';
    guiContainer.appendChild(menuContainer);
    var cheatsButton = createDropdownButton('Cheats', [createScriptButton('B', 'javascript:alert("B button clicked!")'), createScriptButton('K', 'javascript:alert("K button clicked!")'), createScriptButton('G', 'javascript:alert("G button clicked!")')]);
    menuContainer.appendChild(cheatsButton);
    var tricksButton = createDropdownButton('Tricks', [createScriptButton('A.C', 'javascript:(function(){var script=document.createElement(\'script\');script.src=\'https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@1.2.0/other/autoclicker.min.js\';document.body.appendChild(script);})();'), createScriptButton('Console', 'javascript:(function(){console.log("Hello, Console!");}())'), createScriptButton('Piano', 'javascript:(function(){var script=document.createElement(\'script\');script.src=\'https://cdn.jsdelivr.net/gh/Browncha023/Vengeance@1.2.0/other/piano.min.js\';document.body.appendChild(script);})();')]);
    menuContainer.appendChild(tricksButton);
    var funButton = createDropdownButton('Fun', [createScriptButton('Asteroids', 'javascript:var s=document.createElement(\'script\');s.type=\'text/javascript\';s.onerror=function(e){alert(\'Failed to load the script. The site\\\'s Content Security Policy might be blocking it. Feel free to try again.\');};document.body.appendChild(s);s.src=\'https://blog.roysolberg.com/js/dom2.min.js\';void(0);'), createScriptButton('Draw', 'javascript:var s=document.createElement(\'script\');s.type=\'text/javascript\';s.onerror=function(e){alert(\'Failed to load the script. The site\\\'s Content Security Policy might be blocking it. Feel free to try again.\');};document.body.appendChild(s);s.src=\'https://cdn.jsdelivr.net/gh/4tdgfrsea34gthw345/e@main/y.js\';void(0);')]);
    menuContainer.appendChild(funButton);
    var bypassButton = createDropdownButton('Bypass', [createScriptButton('unblock website', 'javascript:var s=document.createElement(\'script\');s.type=\'text/javascript\';s.onerror=function(e){alert(\'Failed to load the script. The site\\\'s Content Security Policy might be blocking it. Feel free to try again.\');};document.body.appendChild(s);s.src=\'https://cdn.jsdelivr.net/gh/4tdgfrsea34gthw345/e@main/cool.js\';void(0);')]);
    menuContainer.appendChild(bypassButton);
    var crossyRoadButton = createGameButton('Crossy Road', 'https://thegamehoster50.github.io/crossyroad/');
    var cookieClickerButton = createGameButton('Cookie Clicker', 'https://thegamehoster50.github.io/cookie-clicker/');
    var fnfButton = createGameButton('FNF', 'https://thegamehoster50.github.io/fnf/');
    var sm64Button = createGameButton('SM64', 'https://thegamehoster50.github.io/sm64/start.html');
    guiContainer.appendChild(crossyRoadButton);
    guiContainer.appendChild(cookieClickerButton);
    guiContainer.appendChild(fnfButton);
    guiContainer.appendChild(sm64Button);
    document.body.appendChild(guiContainer);
    var isHidden = false;
    var isDragging = false;
    var offsetX, offsetY;
    headerContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - parseInt(guiContainer.style.left);
        offsetY = e.clientY - parseInt(guiContainer.style.top);
    });
    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            guiContainer.style.left = e.clientX - offsetX + 'px';
            guiContainer.style.top = e.clientY - offsetY + 'px';
        }
    });
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'l') {
            isHidden = !isHidden;
            guiContainer.style.display = isHidden ? 'none' : 'block';
        }
    });

    function createGameButton(label, url) {
        var button = document.createElement('button');
        button.style.width = '100%';
        button.style.height = '30px';
        button.style.marginTop = '10px';
        button.style.background = '#999';
        button.style.border = 'none';
        button.style.color = '#fff';
        button.textContent = label;
        button.addEventListener('click', function() {
            openGameBookmarklet(url);
        });
        return button;
    }

    function createDropdownButton(label, buttons) {
        var dropdownButton = document.createElement('div');
        dropdownButton.style.width = '100%';
        dropdownButton.style.height = '30px';
        dropdownButton.style.marginTop = '10px';
        dropdownButton.style.background = '#999';
        dropdownButton.style.border = 'none';
        dropdownButton.style.color = '#fff';
        dropdownButton.style.textAlign = 'center';
        dropdownButton.style.position = 'relative';
        dropdownButton.textContent = label;
        var dropdownContent = document.createElement('div');
        dropdownContent.style.position = 'absolute';
        dropdownContent.style.top = '0';
        dropdownContent.style.left = '100%';
        dropdownContent.style.display = 'none';
        dropdownContent.style.background = '#333';
        dropdownContent.style.borderRadius = '10px';
        dropdownContent.style.overflow = 'hidden';
        buttons.forEach(function(btn) {
            dropdownContent.appendChild(btn);
        });
        dropdownButton.appendChild(dropdownContent);
        dropdownButton.addEventListener('click', function() {
            dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
        });
        document.body.addEventListener('click', function(e) {
            if (!dropdownButton.contains(e.target)) {
                dropdownContent.style.display = 'none';
            }
        });
        return dropdownButton;
    }

    function createScriptButton(label, script) {
        var button = document.createElement('button');
        button.style.width = '100%';
        button.style.height = '30px';
        button.style.marginTop = '10px';
        button.style.background = '#999';
        button.style.border = 'none';
        button.style.color = '#fff';
        button.textContent = label;
        button.addEventListener('click', function() {
            executeScript(script);
        });
        return button;
    }

    function executeScript(script) {
        var scriptElement = document.createElement('script');
        scriptElement.textContent = script;
        document.body.appendChild(scriptElement);
    }

    function openGameBookmarklet(url) {
        var gameContainer = document.createElement('div');
        gameContainer.style.position = 'fixed';
        gameContainer.style.top = '50%';
        gameContainer.style.left = '50%';
        gameContainer.style.transform = 'translate(-50%, -50%)';
        gameContainer.style.width = '70%';
        gameContainer.style.height = '70%';
        gameContainer.style.background = '#000';
        gameContainer.style.border = '5px solid #fff';
        gameContainer.style.borderRadius = '10px';
        gameContainer.style.zIndex = '10000';
        var closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '10px';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.background = 'none';
        closeButton.style.fontWeight = 'bold';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(gameContainer);
        });
        var gameIframe = document.createElement('iframe');
        gameIframe.src = url;
        gameIframe.style.width = '100%';
        gameIframe.style.height = 'calc(100% - 30px)';
        gameIframe.style.border = 'none';
        gameIframe.style.borderRadius = '10px';
        var controlBar = document.createElement('div');
        controlBar.style.width = '100%';
        controlBar.style.height = '30px';
        controlBar.style.background = '#333';
        controlBar.style.borderRadius = '0 0 10px 10px';
        controlBar.style.display = 'flex';
        controlBar.style.justifyContent = 'space-between';
        controlBar.style.alignItems = 'center';
        controlBar.style.padding = '0 10px';
        var selfDestructButton = document.createElement('button');
        selfDestructButton.textContent = 'Self-Destruct';
        selfDestructButton.style.marginRight = 'auto';
        selfDestructButton.addEventListener('click', function() {
            document.body.removeChild(gameContainer);
        });
        controlBar.appendChild(selfDestructButton);
        gameContainer.appendChild(closeButton);
        gameContainer.appendChild(gameIframe);
        gameContainer.appendChild(controlBar);
        document.body.appendChild(gameContainer);
    }
})();
