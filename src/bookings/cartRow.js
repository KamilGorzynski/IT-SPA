import $ from 'jquery';

export const cartRow = (product, data) => {
    return $(`
    <tr>
        <td>${product}</td>
        <td>${data['amount']}</td>
        <td>${data['price']} EUR</td>
        <td class="deleteTd"><button target="${product}" type="button" class="btn btn-danger">X</button></td>
    </tr>
    `)[0];
};