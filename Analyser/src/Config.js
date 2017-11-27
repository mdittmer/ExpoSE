function Default(i, d) {
    return process.env[i] || d;
}

export default {
	incrementalSolverEnabled: !!Default('USE_INCREMENTAL_SOLVER', true),
	maxRefinements: Number.parseInt(Default('MAX_REFINEMENTS', '30')),
	regexEnabled: !Default('DISABLE_REGULAR_EXPRESSIONS', false),
	capturesEnabled: !Default('DISABLE_CAPTURE_GROUPS', false),
	refinementsEnabled: !Default('DISABLE_REFINEMENTS', false),
	outFilePath: Default('EXPOSE_OUT_PATH', undefined),
    outCoveragePath: Default('EXPOSE_COVERAGE_PATH', undefined),
    concretizationsEnabled: Default('EXPOSE_PRINT_CONCRETIZATIONS', false)
}