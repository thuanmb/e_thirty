module Pagination
  extend ActiveSupport::Concern

  DEFAULT_PAGE = 1
  DEFAULT_PER_PAGE = 10

  def page
    if params.include?(:page)
      params.fetch(:page)
    else
      DEFAULT_PAGE
    end
  end

  def per_page
    if params.include?(:per_page)
      params.fetch(:per_page)
    else
      DEFAULT_PER_PAGE
    end
  end
end