import {describe,it,expect} from 'vitest';
import { render } from '@testing-library/react';
import { UsernameDis } from '../components/UsernameDis';


describe('Username Display',()=>{
    it('Should Render Username',()=>{
        render(<UsernameDis/>)
    })
    // test('Should Render Username',()=>{
        
    // })
})
