export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        PORT: number;
        
        DB_USER: string;
        DB_HOST: string;
        DB_PASSWORD: string;
        DB_NAME: string;
        ENV: 'test' | 'dev' | 'prod';
       
    }
  }
}
