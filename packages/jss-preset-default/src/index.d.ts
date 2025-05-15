import {Plugin, JssOptions} from '@secure-jss/jss'
import {Options as DefaultUnitOptions} from '@secure-jss/jss-plugin-default-unit'
import {Options as ObservableOptions} from '@secure-jss/jss-plugin-rule-value-observable'

type Options = {defaultUnit?: DefaultUnitOptions; observable?: ObservableOptions}

export default function jssPresetDefault(options?: Options): JssOptions
