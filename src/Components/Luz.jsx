export const Luz = ({colorLuz, luzOscura, luzClara, luzFinal}) => {
	return (
		<div className={colorLuz}>
			<div className={luzOscura}>
				<div className={luzClara}>
					<div className={luzFinal}></div>
				</div>
			</div>
		</div>
	);
};
