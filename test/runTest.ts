import { IConnection } from '@sqltools/types';
import { ddbConfig } from '../src/ls/dolphindbTypes';
import dolphindbDriver from "../src/ls/driver";



const credentials: IConnection<ddbConfig> = {
    server: '',
    port: 8840,
    username: 'admin',
    password: '123456',
    name: '',
    driver: '',
    id: '',
    isConnected: true,
    isActive: true
};




async function runTests() {
    const driver = new dolphindbDriver(credentials, [""][""]);
    
    console.log('Testing...');
    driver.open();
}

runTests().catch(error => {
    console.error("Something happened:", error);
    process.exit(1);
});
