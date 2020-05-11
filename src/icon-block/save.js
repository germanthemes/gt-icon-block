/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { getColorClassName } = wp.blockEditor;

export default function save( { attributes } ) {
	const {
		icon,
		textAlignment,
		iconLayout,
		iconSize,
		iconPadding,
		borderWidth,
		textColor,
		backgroundColor,
		customTextColor,
		customBackgroundColor,
	} = attributes;

	const textColorClass = getColorClassName( 'color', textColor );
	const backgroundClass = getColorClassName( 'background-color', backgroundColor );

	const blockStyles = {
		textAlign: textAlignment,
	};

	const iconClasses = classnames( 'gt-icon', {
		[ `gt-icon-${ iconLayout }` ]: 'default' !== iconLayout,
		[ `gt-icon-${ iconSize }` ]: 'normal' !== iconSize,
		[ `gt-icon-${ iconPadding }-padding` ]: 'normal' !== iconPadding && 'default' !== iconLayout,
		[ `gt-icon-${ borderWidth }-border` ]: 'normal' !== borderWidth && 'outline' === iconLayout,
		'has-text-color': textColor || customTextColor,
		[ textColorClass ]: textColorClass,
		'has-background': backgroundColor || customBackgroundColor,
		[ backgroundClass ]: backgroundClass,
	} );

	const iconStyles = {
		color: textColorClass ? undefined : customTextColor,
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
	};

	/* global GermanThemesIconBlock */
	const svgURL = GermanThemesIconBlock.pluginURL + 'assets/icons/fontawesome.svg#' + icon;
	const svgClasses = classnames( 'icon', `icon-${ icon }` );

	return (
		<div style={ blockStyles }>
			<div className={ iconClasses } style={ iconStyles }>

				<span className="gt-icon-svg" data-icon={ icon }>
					<svg className={ svgClasses } aria-hidden="true" role="img">
						<use href={ svgURL }></use>
					</svg>
				</span>

			</div>
		</div>
	);
}
