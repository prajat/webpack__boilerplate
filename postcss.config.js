module.exports = {
    plugins: [
        require( 'autoprefixer' ),
       require( 'cssnano' ),
    ].filter( Boolean )
};