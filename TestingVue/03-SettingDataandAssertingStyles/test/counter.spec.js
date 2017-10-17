import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter.vue';
import expect from 'expect';


describe ('Counter', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it ('defaults to a count of 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    it ('it increment the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.increment').trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });

    it ('it decrement the count when the decrement button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.increment').trigger('click'); // 1
        wrapper.find('.increment').trigger('click'); // 2

        expect(wrapper.vm.count).toBe(2);
        wrapper.find('.decrement').trigger('click'); // 1
        expect(wrapper.vm.count).toBe(1);

    });

    it ('it decrement the count when the decrement button is clicked with set Data', () => {
        expect(wrapper.vm.count).toBe(0);

        // https://vue-test-utils.vuejs.org/en/api/wrapper/setData.html
        wrapper.setData({
            count: 5
        });

        expect(wrapper.vm.count).toBe(5);

        wrapper.find('.decrement').trigger('click'); // 4

        expect(wrapper.vm.count).toBe(4);

    });

    it ('presents the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);

        wrapper.find('button').trigger('click'); // 1

        expect(wrapper.find('.count').html()).toContain(1);
    });

    it ('never goes below 0', () => {
        expect(wrapper.vm.count).toBe(0);

        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true);

        wrapper.find('.decrement').trigger('click'); // 1

        expect(wrapper.vm.count).toBe(0);

        wrapper.find('.increment').trigger('click'); // 1

        expect(wrapper.find('.increment').hasStyle('display', 'none')).toBe(false);

        expect(wrapper.vm.count).toBe(1);
    });

});
