from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import gettext_lazy as _


@plugin_pool.register_plugin
class NavbarPlugin(CMSPluginBase):
    model = CMSPlugin
    render_template = "frontend/menu/inviso_navbar.html"
    name="Navbar plugin"
    module = "Inviso"
    def render(self, context, instance, placeholder):
        context = super().render(context, instance, placeholder)
        items = 'This is items'
        context.update({
            'items': items,
        })
        return context