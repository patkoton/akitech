/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        REACT_APP_SERVICE_ID: string;
        REACT_APP_TEMPLATE_ID: string;
        REACT_APP_PUBLIC_KEY: string;

    }
}
