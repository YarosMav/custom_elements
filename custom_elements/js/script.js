document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'maxLength',
        value: 5,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ])
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
    }]);
})	




const element = document.querySelector('.select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});


var rules = {
    required: true,
    email: true
};

var result = approve.value('user@domain.com', rules);


