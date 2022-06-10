# terra-iac-cli
simple cli tool for terraform 

## Install
`npm install terra-iac-cli`

## Run it locally 
- clone the project 
- run `yarn install`
- run `yarn build`
- run `terra-iac-cli` -> You have the tool installed locally now
- In case of issues 
  - with linking the package; run ` yarn link --global`; makes `terra-iac-cli` command available for local use
  - with permissions - `chmod u+x` on the terra-iac-cli executable

## Usage 
- takes 2 arguments - cloud provider and service name (order is important)
- `terra-iac-cli help` gives the info on the command usage and supported cloud providers & services
