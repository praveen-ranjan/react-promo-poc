import {render, screen, cleanup} from '@testing-library/react';

import PromoCreate from "../promocode/PromoCreate";

test('Should render PromoCreate component', ()=>{
    render(<PromoCreate/>);
    const promoCreateElement = screen.getByTestId('promo-create-1');
    expect(promoCreateElement).toBeInTheDocument();
})
