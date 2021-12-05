let setUpTheToolTip = function() {
    let tooltip = "",
        tooltipDiv = document.querySelector('.div-tooltip'),
            tooltipElement = Array.from( document.querySelectorAll('button'));
  
            let displayTooltip = function(e, obj){
                tooltip =  obj.dataset.tooltip;
                tooltipDiv.innerHTML = tooltip;
                tooltipDiv.style.top = e.pageY + 'px';
                tooltipDiv.style.left = e.pageX + 'px';
                tooltipDiv.style.opacity = 1;
            };
  
  
            tooltipElement.forEach(function(elem){
        elem.addEventListener('mouseenter', function(e){
            displayTooltip(e, this);
        });
        elem.addEventListener('mouseleave', function(e){
            tooltipDiv.style.opacity = 0;
        })
    })
};

setUpTheToolTip()