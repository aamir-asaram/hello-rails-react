class Greeting < ApplicationRecord
  def random_greeting
    order('RANDOM()').limit(1).first
  end
end
