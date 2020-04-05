import $ from 'jquery';

export const cartRow = (product, data) => {
    return $(`
        <tr>
            <td>${product}</td>
            <td>${data['amount']}</td>
            <td>${data['price']} EUR</td>
            <td class="deleteTd center"><button target="${product}" type="button" class="removeProduct btn btn-danger">X</button></td>
        </tr>
    `)[0];
};