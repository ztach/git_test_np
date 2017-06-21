// clicker.js
(function (window, document) {
    'use strict';
 
    window.Clicker = function (customParams) {
        var CLASS_LOGS = 'logs',
            CLASS_LOGS_ANIMATABLE = CLASS_LOGS + '--animatable',
            CLASS_CLICKER = 'clicker',
            CLASS_CLICKER_READY = CLASS_CLICKER + '--ready',
            SELECTOR_CLICKER = '.' + CLASS_CLICKER,
            logsContainer = document.createElement('div'),
            params = {
                selector: SELECTOR_CLICKER,
                isAnimatable: false
            },
            transitions = {
                transition: 'transitionend',
                OTransition: 'oTransitionEnd',
                MozTransition: 'transitionend',
                WebkitTransition: 'webkitTransitionEnd'
            },
            paramKey,
            elements,
            detectedTransitionEvent,
            transitionKey,
            clickCallback = function (event) {
                var text = document.createElement('p'),
                    triggeredOpacity;
 
                text.innerHTML = 'Click!';
                logsContainer.appendChild(text);
 
                if (params.isAnimatable) {
                    text.style.opacity = 0;
                    triggeredOpacity = window.getComputedStyle(text).opacity;
                    text.style.opacity = 1;
                }
            },
            transitionEndCallback = function (event) {
                var text = document.createElement('p');
 
                text.innerHTML = 'Transition finished!';
                logsContainer.appendChild(text);
            };
 
        for (paramKey in customParams) {
            if (customParams.hasOwnProperty(paramKey)) {
                params[paramKey] = customParams[paramKey];
            }
        }
 
        for (transitionKey in transitions) {
            if (transitions.hasOwnProperty(transitionKey) && logsContainer.style[transitionKey] !== undefined) {
                detectedTransitionEvent = transitions[transitionKey];
            }
        }
 
        logsContainer.classList.add(CLASS_LOGS);
        document.body.appendChild(logsContainer);
 
        elements = [].slice.call(document.querySelectorAll(params.selector));
 
        elements.forEach(function (element) {
            element.addEventListener('click', clickCallback, false);
            element.classList.add(CLASS_CLICKER_READY);
        });
 
        if (params.isAnimatable) {
            logsContainer.classList.add(CLASS_LOGS_ANIMATABLE);
 
            if (detectedTransitionEvent) {
                logsContainer.addEventListener(detectedTransitionEvent, transitionEndCallback, false);
            }
        }
    };
})(window, window.document);