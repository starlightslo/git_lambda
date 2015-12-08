var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
	lambda_invoke: {
    	default: {
        	options: {
            	file_name: 'index.js'
        	}
    	}
	},
	lambda_deploy: {
    	default: {
    		arn: 'arn:aws:lambda:eu-west-1:048889311345:function:git_lamba'
    	}
    },
	lambda_package: {
    	default: {
    		include_time: false
    	}
	}
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])
