CLIENT='./client/'
MODULES='node_modules'
mkdir -p $CLIENT$MODULES
echo "Copy package.json to client/package.json"
cp package.json $CLIENT

echo "Lint dependencies: eslint, react, redux. styled-components"
ln -s $MODULES/eslint $CLIENT$MODULES/eslint
ln -s $MODULES/react $CLIENT$MODULES/react
ln -s $MODULES/redux $CLIENT$MODULES/redux
ln -s $MODULES/styled-components $CLIENT$MODULES/styled-components
ls -al $CLIENT$MODULES/
