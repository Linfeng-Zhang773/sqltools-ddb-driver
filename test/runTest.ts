import { IConnection } from '@sqltools/types';
import { ddbConfig } from '../src/ls/dolphindbTypes';
import dolphindbDriver from "../src/ls/driver";//this import somehow crashes the entire project
import  LSIConnection from '@sqltools/types';

console.log("imported");

const credentials: IConnection<ddbConfig> = {
    server: '192.168.0.141',
    port: 8840,
    username: 'admin',
    password: '123456',
    name: '',
    driver: '',
    id: '',
    isConnected: null,
    isActive: null
};
console.log("here");



async function runTests() {
    console.log('Testing...');
    const driver = new dolphindbDriver(credentials, LSIConnection['workspace']['getWorkspaceFolders']);
    driver.testConnection();
}

runTests().catch(error => {
    console.error("Something happened:", error);
    process.exit(1);
});
