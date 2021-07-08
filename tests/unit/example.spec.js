import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import FooterNav from '@/components/FooterNav.vue';

describe('FooterNav.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(FooterNav, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
