// Карточка учителя (модальное окно)
var modalController = ({modal, openBtn, closeBtn, time = 300}) => {     //определяем переменные в функции
    var modalElem = document.querySelector(modal);                        //переменная modal для всех окон
    var buttonElems = document.querySelectorAll(openBtn);
  
    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;                                                                    //плавное открытие-закрытие
    
    var openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal)
    }
    
    var closeModal = event => {                                           //описываем событие через объект event,
      var target = event.target;                                          //а именно закрытие модального окна через клавишу Escape
                                                                          //либо кнопку мыши на свободном от модального окна пространстве
      if (
        target === modalElem ||                                           //target - это свойства объекта события (event), которое указывает на элемент, на котором произошло событие (|| - или)
        (closeBtn && target.closest(closeBtn)) ||                         //target.closest() позволяет перемещаться по DOM, пока мы не получим элемент, соответствующий заданному селектору.Замечательно то, что мы можем передать любой селектор, который мы также передали бы Element.querySelectorили Element.querySelectorAll. Это может быть идентификатор, класс, атрибут данных, тег или что-то еще.
        event.code === 'Escape'                                           //code - команда для кнопки escape
      ) {
  
        modalElem.style.opacity = 0;
  
        setTimeout(() => {                                                //метод объекта window. Его роль — установка таймера для выполнения действия
          modalElem.style.visibility = 'hidden';
        }, time);
  
        window.removeEventListener('keydown', closeModal);
      }
    }
  
    buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  
    modalElem.addEventListener('click', closeModal)
  };
  
  modalController({
    modal: '.modal-1',
    openBtn: '.modal-button-1',
    closeBtn: '.modal__close',
  });
  
  modalController({
    modal: '.modal-2',
    openBtn: '.modal-button-2',
    closeBtn: '.modal__close',
  });
  
  modalController({
    modal: '.modal-3',
    openBtn: '.modal-button-3',
    closeBtn: '.modal__close',
  });

  modalController({
    modal: '.modal-4',
    openBtn: '.modal-button-4',
    closeBtn: '.modal__close',
  });

  modalController({
    modal: '.modal-5',
    openBtn: '.modal-button-5',
    closeBtn: '.modal__close',
  });

  modalController({
    modal: '.modal-6',
    openBtn: '.modal-button-6',
    closeBtn: '.modal__close',
  });

  modalController({
    modal: '.modal-7',
    openBtn: '.modal-button-7',
    closeBtn: '.modal__close',
  });