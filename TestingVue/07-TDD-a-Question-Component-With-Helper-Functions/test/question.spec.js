import { mount } from 'vue-test-utils';
import expect from 'expect';
import Question from '../src/components/Question.vue';

describe ('Question', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Question, {
            propsData: {
                question: {
                    title: 'The title',
                    body: 'The body'
                }
            }
        });
    });

    it ('presents the title and the body', () => {
        see('The title');
        see('The body');
    });


    it ('can be edited', () => {
        expect(wrapper.contains('input[name=title]')).toBe(false);

        wrapper.find('#edit').trigger('click');

        expect(wrapper.find('input[name=title]').element.value).toBe('The title');
        expect(wrapper.find('textarea[name=body]').element.value).toBe('The body');

    });

    it ('hide edit button in edit mode', () => {

        wrapper.find('#edit').trigger('click');

        expect(wrapper.contains('#edit')).toBe(false);
    });

    it ('update question after editing', () => {
        wrapper.find('#edit').trigger('click');

        type('input[name=title]', 'Changed title');

        wrapper.find('textarea[name=body]').element.value = 'Changed body';
        wrapper.find('textarea[name=body]').trigger('input');
    });

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;

        expect(wrap.html()).toContain(text);
    };

    let type = (selector, text) => {
        wrapper.find(selector).element.value = text;
        wrapper.find(selector).trigger('input');
    };

    //
    // it ('can add reminders', () => {
    //     addReminder('Go to the store');
    //     expect(remindersList()).toContain('Go to the store');
    // });
    //
    // it ('can remove any reminder', () => {
    //     addReminder('Go to the store');
    //     addReminder('Finish screencast');
    //
    //     let deleteButton = wrapper.find('ul > li:first-child .remove');
    //     deleteButton.trigger('click');
    //
    //     expect(remindersList()).not.toContain('Go to the store');
    //     expect(remindersList()).toContain('Finish screencast');
    // });
    //
    // function addReminder(body) {
    //     let newReminder = wrapper.find('.new-reminder');
    //
    //     newReminder.element.value = body;
    //
    //     newReminder.trigger('input');
    //
    //     wrapper.find('button').trigger('click');
    // };
    //
    // function remindersList() {
    //     return wrapper.find('ul').text();
    // }

});



