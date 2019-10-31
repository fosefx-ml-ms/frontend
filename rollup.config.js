import typescript from 'rollup-plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import html from 'rollup-plugin-bundle-html';
import copy from 'rollup-plugin-copy'

export default [
	{
		input: 'src/main.ts',
		output: {
			name: 'bundle',
			file: 'dist/bundle.min.js',
			format: 'iife'
		},
		plugins: [
			typescript(),
			copy({
				targets: [
					{src: 'src/main.css', dest: 'dist'}
				]
			}),
			html({
				template: 'src/index.html',
				dest: "dist",
				filename: 'index.html',
				inject: 'body'
			}),
			terser()
		]
	}
];
