import { mount } from 'vue-test-utils';
import Reminders from '../src/components/Reminders.vue';
import expect from 'expect';

describe ('Reminders', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Reminders);
    });

    it ('hides the reminders list if ther are none', () => {
        expect(wrapper.contains('ul')).toBe(false);
    });

    it ('can add reminders', () => {
        addReminder('Go to the store');
        expect(remindersList()).toContain('Go to the store');
    });

    it ('can remove any reminder', () => {
        addReminder('Go to the store');
        addReminder('Finish screencast');

        let deleteButton = wrapper.find('ul > li:first-child .remove');
        deleteButton.trigger('click');

        expect(remindersList()).not.toContain('Go to the store');
        expect(remindersList()).toContain('Finish screencast');
    });

    function addReminder(body) {
        let newReminder = wrapper.find('.new-reminder');

        newReminder.element.value = body;

        newReminder.trigger('input');

        wrapper.find('button').trigger('click');
    };

    function remindersList() {
        return wrapper.find('ul').text();
    }

});



