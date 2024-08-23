import dolphindbDriver from "../src/ls/driver"
// import {strict as assert} from 'assert'
import { IConnection } from '@sqltools/types'
import { ddbConfig } from '../src/ls/dolphindbTypes'
import { WorkspaceFolder } from 'vscode-languageserver-types'
// import { error } from 'console'


async function runTests() {
    const credentails:IConnection<ddbConfig> = 
    {
        server:'',
        port:8840,
        username:'admin',
        password:'123456',
        name:'',
        driver:'',
        id:'',
        isConnected:true,
        isActive:true
    }

    const getWorkspaceFolders = () =>
        {
            return WorkspaceFolder[""]
        }

    const driver = new dolphindbDriver(credentails,getWorkspaceFolders);

    console.log('Testing...');
}
runTests().catch(error=>
        {
            console.error("something happened");
            process.exit(1);
        })