const page = document.querySelector('.page');
const menu = document.querySelector('.img.-menu');
const features = document.querySelectorAll('.title._feature');
const menuTabs = document.querySelectorAll('.menu._tab');
const questions = document.querySelectorAll('.title._questionList');
const answers = document.querySelectorAll('.copy._questionList');
const formItem = document.querySelectorAll(".form._input");
const formError = document.querySelectorAll(".form-error");

page.addEventListener('click', function (e) {
    tabbedMenu(e);
    questionAnswers(e);
});

function tabbedMenu(event) {
    for (let i = 0; i < features.length; i++) {
        if (features[i] == event.target) {
            if (!event.target.classList.contains('-active')) {
                features[i].classList.toggle('-active');
                menuTabs[i].classList.toggle('-active');
            }
        } else if (features[i].classList.contains('-active') && event.target.classList.contains('_feature')) {
            features[i].classList.toggle('-active');
            menuTabs[i].classList.toggle('-active');
        }
    }
}

function questionAnswers(event) {

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].classList === event.target.classList) {
            questions[i].classList.toggle('-active');
            answers[i].classList.toggle('-active');
        }
    }
}

function formCheck(event) {
    for (let i = 0; i < formItem.length; i++) {
        console.log(formItem[i].checkValidity())
        if (!formItem[i].checkValidity()) {
            console.log(formItem[i].type)
            if (formItem[i].type == 'email')
                formError[i].innerHTML = 'Looks like this is not an email';

            formItem[i].oninvalid = function (e) {
                e.preventDefault();
            }

            formItem[i].addEventListener('keydown', function () {
                formItem[i].style.color = 'rgb(0,0,0)';
            });
      
            formError[i].classList.toggle('-active');
            formItem[i].classList.toggle('-error');
        } else {
            formItem[i].value = '';
            formError[i].classList.toggle('-active');
            formItem[i].classList.toggle('-error');
        }
    }
}
