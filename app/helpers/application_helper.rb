require 'tilt-jade/jade_js'

module ApplicationHelper
  def html_from_jade_template(partial, options={})
    data = File.open(Rails.root.join("app", "assets", "templates", "#{partial}.js.jst.jade"))
    compiled = JadeJs.compile(data, locals: {}, client: true, compileDebug: false)

    raw(JadeJs::Source.context.eval("(#{compiled})(#{options[:locals].to_json}, jade.runtime.attrs, jade.runtime.escape, jade.runtime.rethrow, jade.runtime.merge)"))
  end
end
