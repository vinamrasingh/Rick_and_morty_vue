import vuex from 'vuex';
import AppSearch from '@/components/search/AppSearch.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';

const localVue = createLocalVue();
localVue.use(vuex);

describe('AppSearch.vue', () => {
    let wrapper;
    let store;
    let getters;
    beforeEach(() => {
        const errorShow = jest.fn();
        const searchText = jest.fn()
        getters = {
            errorShow,
            searchText
        }
        store = new vuex.Store({
            getters
        })
        wrapper = shallowMount(AppSearch, {
            store,
            localVue
        })
    })
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
    it('renders search input',()=>{
        expect(wrapper.find("input").exists()).toBe(true);
    })
    it('renders search button', () => {
        expect(wrapper.find("button").text()).toBe("Search");
    })
})