
// $.alert({
//     title: 'Alert!',
//     content: 'Simple alert!',
// });
// $.confirm({
//     title: 'Confirm!',
//     content: 'Simple confirm!',
//     buttons: {
//         confirm: function () {
//             $.alert('Confirmed!');
//         },
//         cancel: function () {
//             $.alert('Canceled!');
//         },
//         else: {
//             text: 'else',
//             btnClass: 'btn-blue',
//             keys: ['enter', 'shift'],
//             action: function(){
//                 $.alert('Something else?');
//             }
//         }
//     }
// });

// $('a.baidu').confirm({
//     content: "是否跳转到百度",
// });
// $('a.baidu').confirm({
//     buttons: {
//         hey: function(){
//             location.href = this.$target.attr('href');
//         }
//     }
// });

// $.confirm({
//     title: 'Prompt!',
//     content: '' +
//         '<form action="" class="formName">' +
//         '<div class="form-group">' +
//         '<label>Enter something here</label>' +
//         '<input type="text" placeholder="Your name" class="name form-control" required />' +
//         '</div>' +
//         '</form>',
//     buttons: {
//         formSubmit: {
//             text: 'Submit',
//             btnClass: 'btn-blue',
//             action: function () {
//                 var name = this.$content.find('.name').val();
//                 if(!name){
//                     $.alert('provide a valid name');
//                     return false;
//                 }
//                 $.alert('Your name is ' + name);
//             }
//         },
//         cancel: function () {
//             //close
//         },
//     },
//     onContentReady: function () {
//         // bind to events
//         var jc = this;
//         this.$content.find('form').on('submit', function (e) {
//             // if the user submits the form by pressing enter in the field.
//             e.preventDefault();
//             jc.$$formSubmit.trigger('click'); // reference the button and click it
//         });
//     }
// });
// $.confirm({
//     title: '网站创建日期',
//     content: '2019-10-29\n\n跳转到我的Github',
//     buttons: {
//         confirm: function () {
//             $.alert('Confirmed!');
//         },
//         cancel: function () {
//             $.alert('Canceled!');
//         },
//         else: {
//             text: 'else',
//             btnClass: 'btn-blue',
//             keys: ['enter', 'shift'],
//             action: function(){
//                 $.alert('Something else?');
//             }
//         }
//     }
// });


function confirmDialog() {
    $.confirm({
        title: '网站创建日期',
        content: '2019-10-29<br><br>跳转到我的Github',
        buttons: {
            跳转: function () {
                location.href="https://github.com/1831553190";
            },
            取消: function () {

            }
        }
    });


    // var c=confirm("创建日期：2019-10-19\n访问我的github：");
    // if(c){
    //     location.href="https://github.com/1831553190";
    // }
}