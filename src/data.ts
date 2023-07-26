export type Imagez = {
    w_img1: string
    w_img2: string
    w_img3: string
    w_img4: string
    w_img5: string
}
export const image1 = ((): Imagez => ({  
    w_img1: require('./assets/images/window_4.png'),
    w_img2: require('./assets/images/window_5.png'),
    w_img3: require('./assets/images/window_3b.png'),
    w_img4: require('./assets/images/window_6.png'),
    w_img5: require('./assets/images/window_7.png')
    }
))();



export type Imagey = {
    r_img1: string
    r_img2: string
    r_img3: string
    r_img4: string
    r_img5: string
}
export const image2 = ((): Imagey => ({  
    r_img1: require('./assets/images/window_4.png'),
    r_img2: require('./assets/images/roof_2.png'),
    r_img3: require('./assets/images/roof_1b.png'),
    r_img4: require('./assets/images/roof_3.png'),
    r_img5: require('./assets/images/window_6.png')
    }
))();



export type Imagex = {
    o_img1: string
    o_img2: string
    o_img3: string
    o_img4: string
    o_img5: string
}
export const image3 = ((): Imagex => ({  
    o_img1: require('./assets/images/window_4.png'),
    o_img2: require('./assets/images/window_5.png'),
    o_img3: require('./assets/images/others.png'),
    o_img4: require('./assets/images/window_6.png'),
    o_img5: require('./assets/images/window_7.png')
    }
))();