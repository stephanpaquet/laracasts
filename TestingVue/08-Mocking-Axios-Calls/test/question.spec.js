import { mount } from 'vue-test-utils';
import expect from 'expect';
import Question from '../src/components/Question.vue';
import moxios from 'moxios';

describe ('Question', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Question, {
            propsData: {
                dataQuestion: {
                    title: 'The title',
                    body: 'The body'
                }
            }
        });

        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it ('presents the title and the body', () => {
        see('The title');
        see('The body');
    });


    it ('can be edited', () => {
        expect(wrapper.contains('input[name=title]')).toBe(false);

        click('#edit');

        expect(wrapper.find('input[name=title]').element.value).toBe('The title');
        expect(wrapper.find('textarea[name=body]').element.value).toBe('The body');

    });

    it ('hide edit button in edit mode', () => {
        expect(wrapper.contains('#edit')).toBe(true);

        click('#edit');

        expect(wrapper.contains('#edit')).toBe(false);
    });

    it.only ('update question after being edited', (done) => {
        click('#edit');

        type('input[name=title]', 'Changed title');
        type('textarea[name=body]', 'Changed body');

        moxios.stubRequest(/questions\/\d+/, {
            status: 200,
            response: {
                title: 'Change title',
                body: 'Change body'
            }
        });
        click('#update');

        see('Changed title');
        see('Changed body');

        moxios.wait(() => {
            see('Your question has been updated.');

           done();
        });
    });

    it ('can cancel out of edit mode', () => {
        click('#edit');

        type('input[name=title]', 'Changed title');

        click('#cancel');

        see('The title');
    });

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;

        expect(wrap.html()).toContain(text);
    };

    let type = (selector, text) => {
        let node = wrapper.find(selector);

        node.element.value = text;
        node.trigger('input');
    };

    let click = (selector) => {
        wrapper.find(selector).trigger('click');
    };
});



