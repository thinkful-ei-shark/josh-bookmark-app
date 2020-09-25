import $ from 'jquery';

async function render(html) {
    // html will be whatever template you set.
    $("#root").html(html);
}


export default {
    render
};