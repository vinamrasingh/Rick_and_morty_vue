import vuex from 'vuex';
import AppCharacters from '@/components/character/AppCharacters.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue();
localVue.use(vuex);

describe('AppCharacters.vue', () => {
    let wrapper;
    let store;
    let actions;
    beforeEach(() => {
        const getCharacters = jest.fn()
        actions = {
            fetchCharacters: jest.fn()
        }
        store = new vuex.Store({
            actions
        })
        wrapper = shallowMount(AppCharacters, {
            store,
            localVue,
            methods: {
                getCharacters
            }
        });
    })
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
    it('renders Previous Button', () => {
        let prevButtonSelector = "button.btn.btn-outline-primary.mr-3";
        expect(wrapper.find(prevButtonSelector).text()).toBe("Prev");
    })
    it('renders Next Button', () => {
        let prevButtonSelector = "button.btn.btn-outline-primary.ml-3";
        expect(wrapper.find(prevButtonSelector).text()).toBe("Next");
    })
})