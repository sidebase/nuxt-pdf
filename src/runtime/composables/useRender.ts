import { createApp, h } from 'vue'
import type { Component } from 'vue'
import { renderToString } from 'vue/server-renderer'
import cleanup from '../../ultis/cleanup'

// TODO: Infer Component props directly for better Typescript support
export interface ComponentParams { props?: any }

const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'

export default async function (component: Component, params?: ComponentParams | null) {
  const app = createApp({ render: () => h(component) }, params?.props)

  const html = await renderToString(app)
  const doc = `${doctype}${cleanup(html)}`

  return doc
}
