$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['inicio', 'creamos', 'servicios', 'proceso', 'contacto'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['inicio', 'creamos', 'servicios','proceso','contacto'],
        responsiveWidth: 1100,
        continuousVertical: true,
        slidesNavigation: true
    });
});