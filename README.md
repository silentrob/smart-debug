# Smart Debug

An extension for the [smart platform](http://smart.joyent.com/) that gives you the ability to display objects nicer then uneval().

## Install

Add smart-helpers as a git submodule. In the root of your your smart project run:

    git submodule add git://github.com/silentrob/smart-debug.git js/smart-debug
    
**Or** if you would like to contribute back to smart-debug, fork the project and then install the submodule with your remote repo location:

    git submodule add git@github.com:<username>/smart-debug.git js/smart-debug
    
## Usage

In your `bootstrap.js` file tell your smart application to use smart-debug:
    
    system.use("smart-debug.init")
    
**Or** only require the helpers you want to use:
    
    system.use("smart-debug.lib.debug")

