import {Plugin, JssOptions} from '@rohitkr/jss'
import {Options as DefaultUnitOptions} from '@rohitkr/jss-plugin-default-unit'
import {Options as ObservableOptions} from '@rohitkr/jss-plugin-rule-value-observable'

type Options = {defaultUnit?: DefaultUnitOptions; observable?: ObservableOptions}

export default function jssPresetDefault(options?: Options): JssOptions
