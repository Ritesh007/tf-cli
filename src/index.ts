#!/usr/bin/env node
import { ec2 } from './aws/ec2';

const main = (cloudProvider, serviceName) => {
if (cloudProvider === 'aws') {
if (serviceName === 'ec2') {
return ec2();
} else {
return console.log('service name not supported');
}
console.log('service name missing');
} else if (!cloudProvider) {
console.log('cloud provider missing');
} else if (cloudProvider === 'help') {
console.log('argument 1 is a cloud provider & argument 2 is a service name');
console.log('supported cloud provider - aws');
console.log('supported service name - ec2');
}else {
console.log('aws is the only cloud provider supported');
}
}

main(process.argv[2], process.argv[3]);