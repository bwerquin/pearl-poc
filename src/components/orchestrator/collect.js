import React from 'react';
import Orchestrator from './orchestrator';
import simpsons from './simpsons';
import 'custom-lunatic.scss';

const Collect = () => (
	<Orchestrator
		savingType={'COLLECTED'}
		preferences={['COLLECTED']}
		source={simpsons}
		data={{}}
		tooltip={false}
	/>
);

export default Collect;
