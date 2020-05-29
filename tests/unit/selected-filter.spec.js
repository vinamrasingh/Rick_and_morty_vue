import vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppSelectedFilter from '../../src/components/selectedFilter/AppSelectedFilter.vue';

const localVue = createLocalVue();
localVue.use(vuex);

describe('AppSelectedFilter.vue', () => {
    let wrapper;
    let store;
    let getters;
    beforeEach(() => {
        getters = {
            selectedFilters: () => {
                return {
                    species: ['Alien']
                }
            }
        }
        store = new vuex.Store({
            getters
        })
        wrapper = shallowMount(AppSelectedFilter, {
            store,
            localVue
        })
    })
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
    it('renders alien selected filter', () => {
        expect(wrapper.find("button").text()).toBe("Alien")
    })
})