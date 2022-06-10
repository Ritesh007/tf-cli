#!/usr/bin/env node
import { ec2 } from './aws/ec2';

const main = (cloudProvider, serviceName) => {
if (cloudProvider && cloudProvider === 'aws') {
if (serviceName && serviceName === 'ec2') {
return ec2();
}
console.log('service name missing or not supported');
} else if (cloudProvider === 'help') {
console.log('argument 1 is a cloud provider & argument 2 is a service name');
console.log('supported cloud provider - aws');
console.log('supported service name - ec2');
}else {
console.log('cloud provider missing or not supported');
}
}

main(process.argv[2], process.argv[3]);