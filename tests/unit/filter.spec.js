import AppFilter from '@/components/filters/AppFilter.vue';
import { shallowMount } from '@vue/test-utils';

describe('AppFilter.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(AppFilter, {
            methods: {
                updateSelectedFilter: () => { }
            },
            computed: {
                filterList: () => {
                    return {
                        species: [
                            {
                                value: 'Alien',
                                selected: false
                            }
                        ]
                    }
                }
            }
        })
    })
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    })
    it('renders species heading', () => {
        expect(wrapper.find("h4").text()).toBe("SPECIES");
    })
    it('renders species checkbox', () => {
        expect(wrapper.find("label").text()).toBe("Alien");
    })
})