import {
  templates,
  select
} from '../settings.js';
import AmountWidget from './AmountWidget.js';
class Booking {
  constructor(element) {
    const thisBooking = this;
    thisBooking.render(element);
    thisBooking.initWidgets();
  }
  render(element) {
    const thisBooking = this;
    /*generate HTML based on template*/
    const generatedHTML = templates.bookingWidget(element);
    /*create an empty object*/
    thisBooking.dom = {};
    /*add wrapper to the object*/
    thisBooking.dom.wrapper = element;
    /*change innerHTML to generatedHTML*/
    thisBooking.dom.wrapper.innerHTML = generatedHTML;

    thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);

  }
  initWidgets() {
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function () {

    });
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function () {});
  }
}
export default Booking;
